import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getLeastCasesAccountant from "@/app/actions/getLeastCasesAccountant";
import { pusherServer } from "@/app/libs/pusher";

// API to create a new conversation/case
export async function POST(
  request: Request,
) {
  try {
    const currentUser = await getCurrentUser()
    const body = await request.json()
    const {
      name,
    } = body

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (!name) {
      return new NextResponse('Invalid data', { status: 400 })
    }

    const newConversation = await prisma.conversation.create({
      data: {
        name: name,
      }
    })

    const conversationOnUser = await prisma.conversationsOnUsers.create({
      data: 
        {
          userId: currentUser.id,
          conversationId: newConversation.id,
        }
    })
    const leastCasesAccountant = await getLeastCasesAccountant()

    if (leastCasesAccountant) {
      const conversationOnUserAccountant = await prisma.conversationsOnUsers.create({
        data: 
          {
            userId: leastCasesAccountant?.id,
            conversationId: newConversation.id,
          }
      })
      const response = { 
        newConversation: newConversation,
        conversationOnUser: conversationOnUser,
        conversationOnUserAccountant: conversationOnUserAccountant,
      }
      return NextResponse.json(response)
    } 

    return new NextResponse('Internal Error', { status: 500 });
  } catch (err) {
    console.log("Conversation creation error", err)
    return new NextResponse('Internal Error', { status: 500 });
  }
}