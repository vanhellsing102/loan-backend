import CreditRequest from "../creditRequest/creditRequest.model.js";
import CreditDecision from "./creditDecision.model.js"

const createCreditDecisionIntoBD = async(payload) =>{
    const existingLoan = await CreditDecision.findOne({email: payload?.email});
    if(existingLoan){
        throw new Error(`You already ${existingLoan?.status} this loan`);
    }
    await CreditRequest.findOneAndUpdate({email: payload?.email}, {status: payload?.status})
    const result = await CreditDecision.create(payload);
    return result;
}

export const CreditDecisionServices = {
    createCreditDecisionIntoBD
}