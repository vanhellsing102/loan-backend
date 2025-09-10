import User from "./user.model.js"


const createUserIntoDB = async(payLoad) =>{
    const exitingUser = await User.findOne({email: payLoad?.email});
    if(exitingUser){
        throw new Error("User already exists");
    }
    const result = await User.create(payLoad);
    return result;
}


export const UserServices = {
    createUserIntoDB,
}