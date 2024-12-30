import mongoose, { connect } from "mongoose";
export const connectDb = async()=>{
    try{
    await mongoose,connect()
    }catch (error){
        console.log(error);
    };

}