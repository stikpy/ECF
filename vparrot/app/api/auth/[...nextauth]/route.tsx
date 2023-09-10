
import NextAuth, { AuthOptions, type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from '@auth/prisma-adapter';



const prisma = new PrismaClient();


export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
   strategy: 'jwt', 
  },
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
        const user = await prisma.users.findUnique ({
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
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role;
      console.log('token',token);
      
      return token;
    },
    session({ session, token }) {
      if (session?.user) {
        // Assurez-vous de mettre à jour le rôle dans la session
        session.user.role = token?.role;
      }
      console.log('session',session);
      
      return session;
    }
  }
  
  };

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

