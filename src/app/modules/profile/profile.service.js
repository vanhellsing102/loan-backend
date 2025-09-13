import Profile from "./profile.model.js"

const updateProfileInDB = async(userId, payload) =>{
    const existingUser = await Profile.findById(userId);
    const {personalInfo: {...personalInfo}, contactInfo: {...contactInfo}, financialInfo: {...financialInfo}} = payload;
    if(!existingUser){
        const result = await Profile.create({_id: userId, personalInfo, contactInfo, financialInfo});
        return result;
    }
    const result = await Profile.findByIdAndUpdate(userId, {personalInfo, contactInfo, financialInfo});
    return result;
}

export const ProfileServices = {
    updateProfileInDB,
}