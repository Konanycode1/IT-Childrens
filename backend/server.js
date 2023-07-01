import express  from "express";
import cors from 'cors'
import { config } from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import { inProduction } from "./config/env.js";
import { error } from "console";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


config({
    path: path.join(process.cwd(), '.env.local'),
});

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '../dist')))


if(inProduction){
    app.get('*/', (_,res)=>{
        res.sendFile(path.join(__dirname, '../dist/index.html'))
    })
}
connectDB()
.then(()=>{
    app.listen(3000,()=>{
        console.log(" server lancé !!")
    })
})
.catch((e)=>{
    console.log(
        'ERREUR de server',e.message
    )
})

