import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";
import { User} from "./interfaces"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id:       String | undefined | null        
    email:      String  
    name:       String     
    role:       String    
    } & DefaultSession
  }

    interface User extends DefaultUser {
        role: string;
}
}


declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
  }
}
