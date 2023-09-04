import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from '@auth/prisma-adapter';


const prisma = new PrismaClient();
const prismaAdapter = PrismaAdapter(prisma);

export const authOptions = {
  // adapter: prismaAdapter,
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: 'Email and Password',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '********',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.users.findUnique({

          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        return {
          id: String(user.id),
          name: user.firstname,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

