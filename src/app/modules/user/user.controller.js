import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { UserServices } from "./user.service.js";
import statusCodes from "http-status";


const createUser = catchAsync(async(req, res) =>{
    const newUser = req.body;
    // console.log("newUser", newUser);
    const result = await UserServices.createUserIntoDB(newUser);
    sendResponse(res, {
        statusCode: statusCodes.OK,
        success: true,
        message: "User sign up successfully",
        data: result
    })
})
const loginUser = catchAsync(async(req, res) =>{
    const {loginUser} = req.body;
    const result = await UserServices.loginUserFromDB(loginUser);
    sendResponse(res, {
        statusCode: statusCodes.OK,
        success: true,
        message: "User login successfully",
        data: result
    })
})
const updatePersonalInformation = catchAsync(async(req, res) =>{
    const {userId} = req.params;
    const {updatedUserInformation} = req.body;
    const result = await UserServices.updatePersonalInformationInDB(userId, updatedUserInformation);
    sendResponse(res, {
        statusCode: statusCodes.OK,
        success: true,
        message: "Profile updated successfully",
        data: result
    })
})
const updatePassword = catchAsync(async(req, res) =>{
    const newUpdatePasswordInfo = req.body;
    const result = await UserServices.updatePasswordInDB(newUpdatePasswordInfo);
    sendResponse(res, {
        statusCode: statusCodes.OK,
        success: true,
        message: "Password updated successfully",
        data: result
    })
})

export const UserControllers = {
    createUser,
    loginUser,
    updatePersonalInformation,
    updatePassword
}