import { model, Schema } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    terms: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const User = model("User", userSchema);

export default User;