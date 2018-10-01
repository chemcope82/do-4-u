const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskListSchema = new Schema({
    user: [
        {
        type: Schema.Types.ObjectId,
        ref: "User"
        }
    ],
    task_1_Description: { type: String, required: true },
    task_1_Location: { type: String, required: true },
    task_1_Location2: { type: String },
    task_1_PaymentAmount: { type: Number, required: true },
    task_1_TimeDoneBy: { type: Date, required: true },
    task_1_Done: { type: Boolean, default: false },
    task_2_Description: { type: String, required: true },
    task_2_Location: { type: String, required: true },
    task_2_Location2: { type: String },
    task_2_PaymentAmount: { type: Number, required: true },
    task_2_TimeDoneBy: { type: Date, required: true },
    task_2_Done: { type: Boolean, default: false },
    task_3_Description: { type: String, required: true },
    task_3_Location: { type: String, required: true },
    task_3_Location2: { type: String },
    task_3_PaymentAmount: { type: Number, required: true },
    task_3_TimeDoneBy: { type: Date, required: true },
    task_3_Done: { type: Boolean, default: false },
    task_4_Description: { type: String, required: true },
    task_4_Location: { type: String, required: true },
    task_4_Location2: { type: String },
    task_4_PaymentAmount: { type: Number, required: true },
    task_4_TimeDoneBy: { type: Date, required: true },
    task_4_Done: { type: Boolean, default: false },
});

const TaskList = mongoose.model("TaskList", taskListSchema);

module.exports = TaskList;