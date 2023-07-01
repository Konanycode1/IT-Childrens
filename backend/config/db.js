import { connect } from "mongoose";
import { inProduction } from "./env.js";

export const connectDB = async ()=>{
    const MONGO_URI = process.env.MONGO_URI;
    if(!MONGO_URI) throw new Error("Env variable is empty");
    await connect(MONGO_URI,{
        dbName : inProduction?'IT-childrens_test': 'IT-childrens'
    })
}


