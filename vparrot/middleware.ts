// middleware/auth.js
import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token && (token.role === 'ADMIN' || token.role === 'USER'),
  },
});

export const config = { matcher: ['/settings/:path*'] };
