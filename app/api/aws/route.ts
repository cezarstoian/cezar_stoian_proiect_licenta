import { NextResponse } from "next/server";
import { FormDataEntryValueExtraType, UploadedFile } from "@/app/types";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';


// API to upload a file to AWS S3
export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    const formData = await request.formData();
    const filename = formData.get("filename");
    const conversationId = formData.get("conversationId");
    const document: FormDataEntryValueExtraType | null = formData.get("document") as FormDataEntryValueExtraType | null;

    console.log("Api body", { filename, document, conversationId });

    const s3Client = new S3Client({
      region: "eu-west-1",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_KEY_ID || "",
      },
    });

    console.log(s3Client);

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!document) {
      return new NextResponse("Document is missing", { status: 400 });
    } else {
      const fileBuffer = await document.arrayBuffer(); // convert back to arrayBuffer
      const fileData = new Uint8Array(fileBuffer);
      const fileFullName = `${conversationId}_${filename}`;
      const params = {
        Bucket: "licenta-cezar",
        Key: fileFullName,
        Body: fileData,
        ACL: "public-read",
      };
      console.log(params);
  
      const command = new PutObjectCommand(params);
      const response = await s3Client.send(command);
      return NextResponse.json(response);
    }
  } catch (err) {
    console.log("File Upload error", err);
  }
}
