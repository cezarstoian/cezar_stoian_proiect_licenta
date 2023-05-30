import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

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
