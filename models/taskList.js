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
    task_1_Runner_Claim_Id: { type: String, default: null },
    task_2_Description: { type: String, required: true },
    task_2_Location: { type: String, required: true },
    task_2_PaymentAmount: { type: Number, required: true },
    task_2_Done: { type: Boolean, default: false },
    task_2_Runner_Claimed: { type: Boolean, default: false },
    task_2_Runner_Claim_Id: { type: String, default: null },
    task_3_Description: { type: String, required: true },
    task_3_Location: { type: String, required: true },
    task_3_PaymentAmount: { type: Number, required: true },
    task_3_Done: { type: Boolean, default: false },
    task_3_Runner_Claimed: { type: Boolean, default: false },
    task_3_Runner_Claim_Id: { type: String, default: null },
    task_4_Description: { type: String, required: true },
    task_4_Location: { type: String, required: true },
    task_4_PaymentAmount: { type: Number, required: true },
    task_4_Done: { type: Boolean, default: false },
    task_4_Runner_Claimed: { type: Boolean, default: false },
    task_4_Runner_Claim_Id: { type: String, default: null },
    deliveryAddress: { type: String, default: "N/A" },
    // dateDoneBy: { type: String, required: true },
    // timeDoneBy: {type: String, required: true},
    month: { type: Number, required: true },
    day: { type: Number, required: true },
    year: { type: Number, required: true },
    hour: { type: Number, required: true },
    minute: { type: Number, required: true },
    amOrPm: { type: String, required: true },


    taskExpired: { type: Boolean, default: false },
    total: {type: Number, required: true},
    // firstName: {type: Number, required: false},
    // lastName: {type: Number, required: false},
    // phone: {type: Number, required: false}

});

const TaskList = mongoose.model("TaskList", taskListSchema);

module.exports = TaskList;