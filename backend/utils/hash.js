 import { hash, compare } from "bcrypt";
 import bcrypt from "bcrypt"

 /**
  * 
  * @param {String} mpd 
  */
 export const crypt = async (mpd)=>{
    return hash(mpd, await bcrypt.genSalt())
}

/**
 * 
 * @param {String} from 
 * @param {String} to 
 * @returns 
 */
export const verifyCrypt = async (from,to)=>{
    try {
        return await compare(from, to)
    } catch (e) {
        console.log(e)
    }
    
}