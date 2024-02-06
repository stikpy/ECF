import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import Zod from 'zod';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const UserSchema = Zod.object({
  email: Zod.string().email(),
  password: Zod.string().min(12),
});

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Email and Password',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'mon@mail.com' },
        password: { label: 'Password', type: 'password', placeholder: '********' },
      },
      async authorize(credentials) {

        if (!credentials) {
          console.log("Les informations de connexion sont manquantes.");
          return null;
        }
      
        const user = await prisma.users.findUnique({
          where: {
            email: credentials.email,
          },
        });
      
        if (!user) {
          console.log("Utilisateur non trouvé.");
          return null;
        }
      
        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user?.password || ''
        );
      
        if (!isValidPassword) {
          console.log("Mot de passe ou nom d'utilisateur incorrect.");
          return null;
        }
      
        return {
          id: String(user.id),
          name: user.firstname,
          email: user.email,
          role: user.role as string,
        };
      },
      
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
   
  },

 
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };