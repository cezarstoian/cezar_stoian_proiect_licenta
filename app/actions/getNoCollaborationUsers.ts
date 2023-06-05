import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getNoCollaborationUsers = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'asc'
      },
      where: {
        acceptedCollaboration: null,
      }
    });

    return users;
  } catch (error: any) {
    return [];
  }
};

export default getNoCollaborationUsers;
