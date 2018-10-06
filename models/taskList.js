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
    task_1_PaymentAmount: { type: Number, required: true },
    task_1_Done: { type: Boolean, default: false },
    task_1_Runner_Claimed: { type: Boolean, default: false },
    task_2_Description: { type: String, required: true },
    task_2_Location: { type: String, required: true },
    task_2_PaymentAmount: { type: Number, required: true },
    task_2_Done: { type: Boolean, default: false },
    task_2_Runner_Claimed: { type: Boolean, default: false },
    task_3_Description: { type: String, required: true },
    task_3_Location: { type: String, required: true },
    task_3_PaymentAmount: { type: Number, required: true },
    task_3_Done: { type: Boolean, default: false },
    task_3_Runner_Claimed: { type: Boolean, default: false },
    task_4_Description: { type: String, required: true },
    task_4_Location: { type: String, required: true },
    task_4_PaymentAmount: { type: Number, required: true },
    task_4_Done: { type: Boolean, default: false },
    task_4_Runner_Claimed: { type: Boolean, default: false },
    deliveryAddress: { type: String },
    dateDoneBy: { type: String, required: true },
    timeDoneBy: {type: String, required: true},
    taskExpired: { type: Boolean, default: false },
    total: {type: Number, required: true}

});

const TaskList = mongoose.model("TaskList", taskListSchema);

module.exports = TaskList;