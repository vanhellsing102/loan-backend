import User from "../User/user.model.js";
import Profile from "./profile.model.js";

const updateProfileInDB = async(userId, payload) =>{
    const {personalInfo: {...personalInfo}, contactInfo: {...contactInfo}, financialInfo: {...financialInfo}} = payload;
    const existingUser = await User.findById(userId);
    if(!existingUser){
        throw new Error("User does not exists");
    }
    const profileId = await Profile.findOne({profileId: userId});
    if(!profileId){
        const result = await Profile.create({profileId: userId, personalInfo, contactInfo, financialInfo});
        return result; 
    }else{
        const result = await Profile.findOneAndUpdate({profileId: userId}, {personalInfo, contactInfo, financialInfo});
        return result;
    }
}
const getProfileFromDB = async(userId) =>{
    const result = await Profile.findOne({profileId: userId});
    return result;
}

export const ProfileServices = {
    updateProfileInDB,
    getProfileFromDB
}