import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import Zod from "zod";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const UserSchema = Zod.object({
  email: Zod.string().email(),
  password: Zod.string().min(4),
});

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        // Validation du schéma
        if (!UserSchema.safeParse(credentials).success) {
          return null; // Vous pourriez ici envoyer un message d'erreur spécifique
        }

        // Assurez-vous que credentials n'est pas undefined
        if (!credentials) {
          return null;
        }

        // Recherche de l'utilisateur
        const user = await prisma.users.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // Si l'utilisateur n'existe pas
        if (!user) {
          return null; // Vous pourriez ici envoyer un message d'erreur spécifique
        }

        // Vérification du mot de passe
        const isValidPassword = await bcrypt.compare(credentials.password, user.password);
        if (!isValidPassword) {
          return null; // Vous pourriez ici envoyer un message d'erreur spécifique
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
    session({ session, token, user }) {
      if (session?.user) {
        session.user.role = token?.role;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
