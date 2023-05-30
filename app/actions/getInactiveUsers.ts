import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getInactiveUsers = async () => {
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
        isEnabled: false,
      }
    });

    return users;
  } catch (error: any) {
    return [];
  }
};

export default getInactiveUsers;
