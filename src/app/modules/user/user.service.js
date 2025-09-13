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
const updatePasswordInDB = async(payload) =>{
    const {email, currentPassword, newPassword} = payload;
    const existingUser = await User.findOne({email});
    if(!existingUser){
        throw new Error("User does not exists");
    }
    const comparePassword = await bcrypt.compare(currentPassword, existingUser.password);
    if(!comparePassword){
        throw new Error("Password is incorrect. Please enter the correct password");
    }
    const newPasswordHash = await bcrypt.hash(newPassword, 10);
    const result = await User.findOneAndUpdate({email}, {password: newPasswordHash}, {new: true});
    return result;
}

export const UserServices = {
    createUserIntoDB,
    loginUserFromDB,
    // updatePersonalInformationInDB,
    updatePasswordInDB
}