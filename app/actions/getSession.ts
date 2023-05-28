import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function getSerrion() {
  return await getServerSession(authOptions)
}