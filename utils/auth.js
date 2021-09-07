import { hash, compare } from "bcryptjs";
import { connectDB } from "./db";

export async function hashPassword(password) {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
}

export async function verifyPassword(password, hashedPassword){
    const isValid = await compare(password, hashedPassword)
    return isValid;
}

export async function checkExistingUserEmail(email) {
    
   const client = await connectDB();
   
   const db = client.db();

   const user = await db.collection('users').findOne({email});

   if(!user) {
       return;
   } 

   return user;
}