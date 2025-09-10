import User from "./user.model.js";
import bcrypt from "bcrypt";


const createUserIntoDB = async(payload) =>{
    const exitingUser = await User.findOne({email: payload?.email});
    if(exitingUser){
        throw new Error("User already exists");
    }
    const result = await User.create(payload);
    return result;
}
const loginUserFromDB = async(payload) =>{
    const {email, password} = payload;
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

const updatePersonalInformationInDB = async(userId, payload)=>{
    const updatedPayload = {personalInformation: {...payload}};
    const exitingUser = await User.findById(userId);
    if(!exitingUser){
        throw new Error("User does not exists");
    }
    const result = await User.findByIdAndUpdate(userId, updatedPayload, {new: true});
    return result;
}

export const UserServices = {
    createUserIntoDB,
    loginUserFromDB,
    updatePersonalInformationInDB,
}