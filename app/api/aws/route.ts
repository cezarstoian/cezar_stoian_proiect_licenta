import { NextResponse } from "next/server";
import { UploadedFile } from "@/app/types";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// does not work in API form
// API to download a file from AWS S3
// export async function GET(
//   request: Request,
//   { params }: { params: IParams }
// ) {
//   try {
//     const { filename } = params

//     const fileUrl = `https://licenta-cezar.s3.eu-west-1.amazonaws.com/${filename}`
//     console.log(fileUrl)

//     saveAs(fileUrl, filename)

//     return NextResponse.json('File Saved')
//   } catch (err) {
//     console.log("File Download error", err)
//     return new NextResponse('Internal Error', { status: 500 })
//   }
// }

// API to upload a file to AWS S3
export async function POST(
  request: Request,
) {
  try {
    const currentUser = await getCurrentUser()

    const formData = await request.formData()
    const filename = formData.get("filename")
    const document = formData.get("document")
    // const {
    //   filename,
    //   document,
    // } = body

    console.log("Api body", {filename, document})

    const s3Client = new S3Client({ 
      region: 'eu-west-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY || '',
        secretAccessKey: process.env.AWS_SECRET_KEY || '',
      },
    });

    console.log(s3Client)
    
    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const fileBuffer = await document?.arrayBuffer(); // convert back to arrayBuffer 

    const params = {
      Bucket: 'licenta-cezar',
      Key: filename,
      Body: fileBuffer,
    };
    console.log(params)

    const command = new PutObjectCommand(params)
    const response = await s3Client.send(command)
    return NextResponse.json(response)
  } catch (err) {
    console.log("File Upload error", err)
  }
}
