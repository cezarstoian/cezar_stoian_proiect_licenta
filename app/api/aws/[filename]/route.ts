import { NextResponse } from "next/server";
import { saveAs } from 'file-saver';

interface IParams {
  filename?: string;
}

// does not work in API form
// API to download a file from AWS S3
export async function GET(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const { filename } = params

    const fileUrl = `https://licenta-cezar.s3.eu-west-1.amazonaws.com/${filename}`
    console.log(fileUrl)

    saveAs(fileUrl, filename)

    return NextResponse.json('File Saved')
  } catch (err) {
    console.log("File Download error", err)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
