import mongoose, {model, Schema} from "mongoose";

const creditDecisionSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    interestRate: {
        type: Number
    },
    loanAmount: {
        type: Number
    },
    notes: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["approve", "reject"],
        required: true
    },
    terms: {
        type: String,
        enum: ["3", "6", "12", "24", "36"]
    }
})

const CreditDecision = mongoose.models.CreditDecision || model("CreditDecsion", creditDecisionSchema);

export default CreditDecision;