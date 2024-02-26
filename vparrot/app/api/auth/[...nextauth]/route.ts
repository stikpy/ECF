import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/app/utils/db';
import Zod from 'zod';
import bcrypt from 'bcrypt';
import { User } from '@/types/interfaces';


const UserSchema = Zod.object({
  email: Zod.string().email(),
  password: Zod.string().min(12),
});

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    maxAge: 5 * 60 * 60, 
  },
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
        try {
          if (!credentials) throw new Error("Les informations de connexion sont manquantes.");

          const user = await prisma.users.findUnique({
            where: { email: credentials.email },
          });

          if (!user) throw new Error("Utilisateur non trouvé.");

          const isValidPassword = await bcrypt.compare(credentials.password, user.password || '');

          if (!isValidPassword) throw new Error("Mot de passe ou nom d'utilisateur incorrect.");

          return { id: String(user.id), name: user.firstname, email: user.email, role: user.role };
        } catch (error) {
          console.error(error);
          return null;
        }
      },
      
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id ? String(user.id) : undefined;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
        session.user.id = token.id as  string | undefined;
      }
      return session;
    },
  }

 
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };