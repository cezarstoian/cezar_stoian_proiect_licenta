import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

interface IParams {
  userId?: string;
}

// API to DELETE a user by its id
export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const { userId } = params

    const deletedUser = await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return NextResponse.json(deletedUser)
  } catch (err: any) {
    return NextResponse.json(null);
  }
}
