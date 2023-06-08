import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: "/home"
  }
})

export const config = {
  matcher: [
    "/admin/:path*",
    "/conversations/:path*",
  ]
}