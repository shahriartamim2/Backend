import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    },
   
}, { timestamps: true })

export const User = mongoose.model("User", userSchema)