// middleware/auth.js
import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    console.log(req.nextUrl.pathname);
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === 'ADMIN' || token?.role === 'USER', 

  
    },
  }
);

export const config = {
  matcher: ['/settings/']
};
