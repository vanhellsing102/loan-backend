import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { UserServices } from "./user.service.js";
import statusCodes from "http-status";


const createUser = catchAsync(async(req, res) =>{
    const {newUser} = req.body;
    const result = await UserServices.createUserIntoDB(newUser);
    sendResponse(res, {
        StatusCode: statusCodes.OK,
        success: true,
        message: "User sign up successfully",
        data: result
    })
})


export const UserControllers = {
    createUser,
}