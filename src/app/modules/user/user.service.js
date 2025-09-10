import User from "./user.model.js"

const createUserIntoDB = async(payLoad) =>{
    const result = await User.create(payLoad);
    return result;
}


export const UserServices = {
    createUserIntoDB,
}