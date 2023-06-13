import { NextResponse } from "next/server";
import { UploadedFile } from "@/app/types";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';


// API to upload a file to AWS S3
export async function POST(
  request: Request,
) {
  try {
    const currentUser = await getCurrentUser()

    const formData = await request.formData()
    const filename = formData.get("filename")
    const conversationId = formData.get("conversationId")
    const document = formData.get("document")

    console.log("Api body", {filename, document, conversationId})

    const s3Client = new S3Client({ 
      region: 'eu-west-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY || '',
        secretAccessKey: process.env.AWS_KEY_SECRET || '',
      },
    });

    console.log(s3Client)
    
    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const fileBuffer = await document?.arrayBuffer(); // convert back to arrayBuffer 
    const fileFullName = `${conversationId}_${filename}`
    const params = {
      Bucket: 'licenta-cezar',
      Key: fileFullName,
      Body: fileBuffer,
      ACL: 'public-read',
    };
    console.log(params)

    const command = new PutObjectCommand(params)
    const response = await s3Client.send(command)
    return NextResponse.json(response)
  } catch (err) {
    console.log("File Upload error", err)
  }
}
