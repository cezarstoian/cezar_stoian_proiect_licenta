import { withAuth } from 'next-auth/middleware';
import getSession from './app/actions/getSession'

export default withAuth({
  pages: {
    signIn: "/home"
  }
})

// export const isAdmin = async ( res: any, next: any) => {
//   const session = await getSession();

//   if (session && session.user.role === 'admin') {
//     return next();
//   }

//   res.status(403).json({ message: 'Forbidden' });
// };

export const config = {
  matcher: [
    "/users/:path*",
    "/admin/:path*",
  ]
}