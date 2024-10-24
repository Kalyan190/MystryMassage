import mongoose from "mongoose";

type ConnectionObject = {
   isConnected?:number
}

const Connection:ConnectionObject = {}

async function DbConnect() : Promise<void>{
   if(Connection.isConnected){
      console.log("Already connected to database");
      return
   }

   try {
      const db = await mongoose.connect(process.env.MONGODB_URI || '',{})
      
   } catch (error) {
      
   }
}