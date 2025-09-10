import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String
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


userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 10);
    // console.log(this.password);
    next();
})

const User = model("User", userSchema);

export default User;