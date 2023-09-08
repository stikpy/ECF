import { SessionStrategy, } from 'next-auth' 
import NextAuth, { AuthOptions, type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from '@auth/prisma-adapter';


const prisma = new PrismaClient();


export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt' as SessionStrategy, 
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
        }; // Renvoyer l'utilisateur s'il est trouvé et que le mot de passe correspond
      },
    }),
  ],
  callbacks: {
 
    session: ({session, token}) => {
      console.log('session token',{session, token});
    
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
        }
      }
    },
    jwt: ({token, user }) => {
      console.log('jwt token',{token, user});
      if(user){
        const u = user as any;
        return {
          ...token,
          id: u.id,
          role: u.role,
        }
      }
      console.log("User in authorize:", user);
  
      return token;
    }
    
  },
 
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };