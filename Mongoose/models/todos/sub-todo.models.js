import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },

}, { timestamps: true })

export const SubTodo = mongoose.model("SubTodo", subTodoSchema)