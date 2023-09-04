<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from '@auth/prisma-adapter';

<<<<<<< Updated upstream

const prisma = new PrismaClient();
const prismaAdapter = PrismaAdapter(prisma);


export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
=======
const prisma = new PrismaClient();
const prismaAdapter = PrismaAdapter(prisma);

export const authOptions = {
  // adapter: prismaAdapter,
  secret: process.env.NEXTAUTH_SECRET,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        const user = await prisma.users.findUnique ({
=======
        const user = await prisma.users.findUnique({
>>>>>>> Stashed changes
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }
<<<<<<< Updated upstream


        return {
          id: user.id + '',
          name: user.firstname,
          email: user.email,
          role: user.role,
          randomKey: 'HeyCool'
        }; // Renvoyer l'utilisateur s'il est trouvé et que le mot de passe correspond
      },
    }),
  ],
  callbacks: {
    // async redirect(url, baseUrl) {
    //   return '/testAuth';
    // },
    session: ({session, token}) => {
      console.log('session token',{session, token});
      // Renvoie la session à l'utilisateur après une authentification réussie
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
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          role: u.role,
        }
      }
      
      return token;
    }
  },
  pages: {

    signOut: '/',
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
=======
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
>>>>>>> Stashed changes
