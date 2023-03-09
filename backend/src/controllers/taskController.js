const taskModels = require("../models/tasksModels");

const getAll = async (req,res) => {
    const [taskList,buffer] = await taskModels.getAll();
    return res.status(200).json(taskList);
}

const createTask = async (req,res) => {
    const createdTask = await taskModels.createTask(req.body);
    return res.status(201).json(createdTask);
} 

module.exports = {
    getAll,
    createTask
};