import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversations = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser?.id) {
    return [];
  }

  try {
    const conversations = await prisma.conversationsOnUsers.findMany({
      where: {
        userId: currentUser.id
      },
      include: {
        user: true,
        conversation: {
          include: {
            messages: true,
          }
        }
      },
      orderBy: {
        lastMessageAt: 'desc',
      },
    });

    return conversations;
  } catch (error: any) {
    return [];
  }
};

export default getConversations;
