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
    const {personalInformation} = req.body;
    const result = await UserServices.updatePersonalInformationInDB(userId, personalInformation);
    sendResponse(res, {
        statusCode: statusCodes.OK,
        success: true,
        message: "User personal information updated successfully",
        data: result
    })
})

export const UserControllers = {
    createUser,
    loginUser,
    updatePersonalInformation
}