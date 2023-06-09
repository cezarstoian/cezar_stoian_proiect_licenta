import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"

// API to create a new message
export async function  POST(
  request: Request
) {
  try {
    const currentUser = await getCurrentUser()
    const body = await request.json()
    const {
      message,
      document,
      conversationId,
    } = body

    if (!currentUser?.id || !currentUser?.email) return new NextResponse('Unauthorized', { status: 401 })

    const newMessage = await prisma.message.create({
      data: {
        body: message,
        document: document,
        conversation: {
          connect: {
            id: conversationId
          }
        },
        sender: {
          connect: {
            id: currentUser.id
          }
        },
      },
      include: {
        sender: true,
      }
    })

    const conversationUpdate = await prisma.conversation.update({
      where: {
        id: conversationId,
      },
      data: {
        lastMessageAt: new Date(),
        messages: {
          connect: {
            id: newMessage.id,
          }
        }
      },
    })

    return NextResponse.json(newMessage)
  } catch (err) {
    console.log("Message creation error", err)
    return new NextResponse("Internal server error", { status: 500 });
  }
}