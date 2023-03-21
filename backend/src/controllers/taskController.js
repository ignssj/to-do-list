const taskModels = require("../models/tasksModels");

const getAll = async (req,res) => {
    const [taskList,buffer] = await taskModels.getAll();
    return res.status(200).json(taskList);
}

const createTask = async (req,res) => {
    const createdTask = await taskModels.createTask(req.body);
    return res.status(201).json(createdTask);
} 

const deleteTask = async (req,res) => {
    const {id} = req.params;
    const removedTask = await taskModels.deleteTask(id);
    return res.status(204).json();
}

const updateTask = async (req,res) => {

    const {id} = req.params;
    const updatedTask = await taskModels.updateTask(id,req.body);
    return res.status(200).json(req.body);
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};