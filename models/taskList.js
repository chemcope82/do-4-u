const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskListSchema = new Schema({
    user: [
        {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
        }
    ],
    task_1_Description: { type: String, required: true },
    task_1_Location: { type: String, required: true },
    task_1_PaymentAmount: { type: Number, required: true },
    task_1_Done: { type: Boolean, default: false },
    task_1_Runner: [
        {
        type: Schema.Types.ObjectId,
        default: null,
        ref: "User"
        }
    ],
    task_2_Description: { type: String },
    task_2_Location: { type: String },
    task_2_PaymentAmount: { type: Number },
    task_2_Done: { type: Boolean, default: false },
    task_2_Runner: [
        {
        type: Schema.Types.ObjectId,
        default: null,
        ref: "User"
        }
    ],
    task_3_Description: { type: String },
    task_3_Location: { type: String },
    task_3_PaymentAmount: { type: Number },
    task_3_Done: { type: Boolean, default: false },
    task_3_Runner: [
        {
        type: Schema.Types.ObjectId,
        default: null,
        ref: "User"
        }
    ],
    task_4_Description: { type: String },
    task_4_Location: { type: String },
    task_4_PaymentAmount: { type: Number },
    task_4_Done: { type: Boolean, default: false },
    task_4_Runner: [
        {
        type: Schema.Types.ObjectId,
        default: null,
        ref: "User"
        }
    ],
    deliveryAddress: { type: String, default: "N/A" },
    month: { type: Number, required: true },
    day: { type: Number, required: true },
    year: { type: Number, required: true },
    hour: { type: Number, required: true },
    minute: { type: Number, required: true },
    amOrPm: { type: String, enum: ["AM", "PM"], required: true },
    taskExpired: { type: Boolean, default: false },
    total: {type: Number, required: true}
});

const TaskList = mongoose.model("TaskList", taskListSchema);

module.exports = TaskList;