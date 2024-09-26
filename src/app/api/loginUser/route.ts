import { NextResponse } from "next/server";
import { signIn } from "../../../../auth";

interface loginUser { 
    email : string, 
    password : string

}

export async function POST(request : Request){ 
    const values :loginUser  = await request.json(); 
    const {email, password} = values ;
    try {
        const userSession = await signIn("credentials", values);  
        if(userSession){
            return NextResponse.json({message: "login sucessful", userSession})

        }else{ 
            return NextResponse.json(
                { message: "Invalid email or password" },
                { status: 401 }
            )
        }
        
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong", error: error },
            { status: 500 }
          );
        
    }

    
}