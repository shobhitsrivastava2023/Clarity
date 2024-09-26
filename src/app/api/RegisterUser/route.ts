import bcrypt from "bcrypt"
import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";



interface registerUser {
    email : string,
    username : string, 
    password : string
}

export async function POST (request: Request) { 
    const values: registerUser = await request.json();
    const {username, email, password} = values;
    // hash the passwords 
    const hashedPassword =  await bcrypt.hash(password,10); 
    // putting the data in the prisma db 

    try {
        const newUser = await prisma?.userRegister.create({ 
            data : { 
                userName : username,
                email : email,
                password : hashedPassword
                
            }
        })
        return NextResponse.json({user : newUser}, {status: 201});
        
    } catch (error) {
        console.error("error creating the user: ", error); 
        return NextResponse.json({error : "user Registration Failed"}, {status : 500})
        
    }
}