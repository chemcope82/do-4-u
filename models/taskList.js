const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskListSchema = new Schema({
    task_1_Description: ,
    task_1_Location: ,
    task_1_Location2: ,
    task_1_PaymentAmount: ,
    task_1_TimeDoneBy: ,
    task_2_Description: ,
    task_2_Location: ,
    task_2_Location2: ,
    task_2_PaymentAmount: ,
    task_2_TimeDoneBy: ,
    task_3_Description: ,
    task_3_Location: ,
    task_3_Location2: ,
    task_3_PaymentAmount: ,
    task_3_TimeDoneBy: ,
    task_4_Description: ,
    task_4_Location: ,
    task_4_Location2: ,
    task_4_PaymentAmount: ,
    task_4_TimeDoneBy: 
});

const TaskList = mongoose.model("TaskList", taskListSchema);

module.exports = TaskList;