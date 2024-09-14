"use server"

import { auth } from "@/auth";

export async function getCurrentUser(){
    try{
        const session = await auth()
        if(!session) getCurrentUser()
        return session!.user
        
    }catch(e:any){
        console.log(e);
        throw new Error(`error fetching current user: ${e.message}`)
    }
}