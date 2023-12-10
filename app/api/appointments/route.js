import dbConnect from "@/config/db";
import { AppointmentModel } from "@/model/appointments";
import { NextResponse } from "next/server";
dbConnect();

export const GET =async (req,route)=>{
try {
    
    const data = await AppointmentModel.find()


    return NextResponse.json({message:"Successfully appointments fetched",appointments:data})
} catch (error) {
    return NextResponse.json({message:"something went wrong",error:JSON.stringify(error)})
}
}

export const POST =async(req)=>{

    try {
         const body = await req.json()

        
             const appointments= new AppointmentModel(body)
      await appointments.save()
         return NextResponse.json({message:"Data Posted"})
       
        
     
    } catch (error) {
          return NextResponse.json({message:"something went wrong",error:JSON.stringify(error)})
    }
}

export const PUT =async(req)=>{

    try {
         const body = await req.json()

        
           await AppointmentModel.updateOne({_id:body.id},body)
         return NextResponse.json({message:"Data Posted update"})
      
     
    } catch (error) {
          return NextResponse.json({message:"something went wrong",error:JSON.stringify(error)})
    }
    

   
}

export const DELETE = async(req)=>{
    try {
        const body = await req.json()

        if (body.id) {
           await AppointmentModel.deleteOne({
            _id:body.id
           })
        return NextResponse.json({message:"Data deleted"})
        }
       
    
    } catch (error) {
        return NextResponse.json({message:"something went wrong in deleting",error:JSON.stringify(error)})
    }
}
  