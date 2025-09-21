import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { CreditDecisionServices } from "./creditDecision.service.js";
import statesCodes from "http-status";

const createCreditDecision = catchAsync(async(req, res) =>{
    const {clientInfo} = req.body;
    // console.log("models", clientInfo);
    const result = await CreditDecisionServices.createCreditDecisionIntoBD(clientInfo);
    sendResponse(res, {
        statesCode: statesCodes.OK,
        success: true,
        message: `Loan is ${clientInfo?.status}`,
        data: result
    })
})

export const CreditDecisionControllers = {
    createCreditDecision
}