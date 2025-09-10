import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

// const personalInformationSchema = new Schema({

// }, {_id: false})

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    terms: {
      type: String,
      required: true,
    },
    personalInformation: {
      type: {
        firstName: {
        type: String
      },
      lastName: {
        type: String
      },
      phoneNumber: {
        type: String
      },
      streetAddress: {
        type: String
      },
      city: {
        type: String
      },
      state: {
        type: String
      },
      zipCode: {
        type: String
      }
    },
    default: {},
    _id: false
  }
},
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  // console.log(this.password);
  next();
});

const User = model("User", userSchema);

export default User;
