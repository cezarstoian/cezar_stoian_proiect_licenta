import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

// API to update the user's role
export async function POST(
  request: Request,
) {
  try {
    const body = await request.json()
    const {
      user,
      newRole,
    } = body;

    const userRole = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        role: newRole,
      }
    });
    console.log("UserRole", userRole)
    return NextResponse.json(userRole)
  } catch (err) {
    console.log("Role update error", err)
    return new NextResponse('Internal Error', { status: 500 })
  }
}