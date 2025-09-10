import { model, Schema } from "mongoose";

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    terms: {
        type: String,
        required: true
    }
})

const User = model("User", userSchema);

export default User;