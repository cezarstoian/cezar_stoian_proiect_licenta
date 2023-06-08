import prisma from '@/app/libs/prismadb'

import getSession from './getSession'

const getLeastCasesAccountant = async () => {
  try {
    const accountants = await prisma.user.findMany({
      where: {
        role: 'contabil'
      },
      include: {
        conversations: true,
      },
      orderBy: {
        conversations: {
          _count: 'asc',
        },
      },
      take: 1,
    })
    const leastCasesAccountant = accountants[0]

    return leastCasesAccountant
  } catch (err: any) {
    return null
  }
}

export default getLeastCasesAccountant;