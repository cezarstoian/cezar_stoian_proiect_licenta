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
    console.log("User delete error", err)
    return new NextResponse("Internal server error", { status: 500 });
  }
}
