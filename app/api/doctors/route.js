import dbConnect from "@/config/db";
import { DoctorModel } from "@/model/doctor";

import { NextResponse } from "next/server";
dbConnect();

export const GET =async (req,route)=>{
try {
    
    const data = await DoctorModel.find()


    return NextResponse.json({message:"Successful",doctors:data})
} catch (error) {
    return NextResponse.json({message:"something went wrong",error:JSON.stringify(error)})
}
}