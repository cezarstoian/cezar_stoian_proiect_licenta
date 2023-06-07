import { withAuth } from 'next-auth/middleware';

// export default withAuth({
//   pages: {
//     signIn: "/home"
//   }
// })

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname === "/admin") {
        return token?.role === "admin"
      }
      return !!token
    },
  },
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