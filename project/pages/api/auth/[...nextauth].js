import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDatabase from "../../../lib/db";
import argon from "argon2"; 
import user from "@/user";
export default NextAuth({
    providers: [// Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,

      async profile(profile) {
        connectDatabase();

        const email = profile.email;
        const name = profile.name;
        const image = profile.picture;
        
        const exist_user = await user.findOne({ email });
        if (!exist_user) 
        {
            try {
                const users = await user.create({ name, email, balance: 0 ,image});
              } catch (error) {
                throw Error(error?.message);
              };
        }
        
        return {
          id: profile.sub,
          name,
          email,
          image,
        };
      },
    }),

    // With CustomCredentials
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        await connectDatabase();

        // check user existance
        const User = await user.findOne({ email: credentials?.email });
        if (!user) throw Error("Email or Password doesn't match!");

        // check password
        const matchedPassword = await argon.verify(
          User?.password, 
          credentials?.password
        );

        if (!matchedPassword || User.email !== credentials.email)
          throw Error("Email or Password doesn't match!");

        return User;
      },
    }),
  ],

  secret:'pekkOy/rZFSCogi+jsct71msFw1QsTfQfL6M5U8Bstk='
});

