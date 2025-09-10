import User from "./user.model.js";
import bcrypt from "bcrypt";


const createUserIntoDB = async(payLoad) =>{
    const exitingUser = await User.findOne({email: payLoad?.email});
    if(exitingUser){
        throw new Error("User already exists");
    }
    const result = await User.create(payLoad);
    return result;
}
const loginUserFromDB = async(payLoad) =>{
    const {email, password} = payLoad;
    // console.log(email, password);
    const exitingUser = await User.findOne({email: email});
    if(!exitingUser){
        throw new Error("User does not exists");
    }
    const isPasswordMatched = await bcrypt.compare(password, exitingUser.password);
    if(!isPasswordMatched){
        throw new Error("Password is incorrect");
    }
    return exitingUser;
}

export const UserServices = {
    createUserIntoDB,
    loginUserFromDB,
}