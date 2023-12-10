

import dbConnect from "@/config/db";
import { DoctorCredModel } from "@/model/doctorCreds";
import CredentialsProvider from "next-auth/providers/credentials";

dbConnect()

export const options = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                userName: { label: "Username", type: "text", placeholder: "Username" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials, req) {
                const data = await DoctorCredModel.find({ userName: credentials.userName, password: credentials.password })
                console.log(data)
                if (data.length !== 0) {
                    const user = {id: data[0]._id, userName: credentials.userName}
                    console.log("User", user)
                    return user
                } else {
                    console.log("No User")
                    return null
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
   
}