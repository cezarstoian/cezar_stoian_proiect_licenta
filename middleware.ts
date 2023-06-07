import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: "/home"
  }
})

export const config = {
  matcher: [
    "/users/:path*",
    "/admin/:path*",
    "/conversations/:path*",
  ]
}