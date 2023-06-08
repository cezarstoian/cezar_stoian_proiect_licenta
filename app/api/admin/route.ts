import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

// API to GET the unverified users
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'asc'
      },
      where: {
        isEnabled: false
      }
    });
    console.log(users)
    return NextResponse.json(users)
  } catch (err: any) {
    console.log(err, "Retrieve unverified users error")
    return new NextResponse('Internal Error', { status: 500 })
  }
}

// API to update the user's isEnabled and acceptedCollaboration properties
export async function POST(
  request: Request,
) {
  try {
    const body = await request.json()
    const {
      user,
      approve,
    } = body;

    const userValidation = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        isEnabled: approve,
        acceptedCollaboration: approve,
      }
    });
    console.log("UserValidation", userValidation)
    return NextResponse.json(userValidation)
  } catch (err: any) {
    console.log(err, "User validation error")
    return new NextResponse('Internal Error', { status: 500 })
  }
}
