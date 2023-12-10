import dbConnect from "@/config/db";
import { PatientModel } from "@/model/patient";

import { NextResponse } from "next/server";
dbConnect();

export const GET =async (req,route)=>{
try {
    
    const data = await PatientModel.find()


    return NextResponse.json({message:"Successfull pateint added",patients:data})
} catch (error) {
    return NextResponse.json({message:"something went wrong",error:JSON.stringify(error)})
}
}

export const POST =async(req)=>{

    try {
         const body = await req.json()

        
             const product= new PatientModel(body)
      await product.save()
         return NextResponse.json({message:"Data Posted"})
       
     
    } catch (error) {
          return NextResponse.json({message:"something went wrong",error:JSON.stringify(error)})
    }
    

   
}