const taskModels = require("../models/tasksModels");

const getAll = async (req,res) => {
    const taskList = await taskModels.getAll();
    return res.status(200).json(taskList);
}

module.exports = {
    getAll
};