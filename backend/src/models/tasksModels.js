const connection = require("./connection");

const getAll = async () => {
const tasks = await connection.execute("SELECT * FROM tasks");
return tasks;
};

const createTask = async (task) => {
    const {title, status} = task;
    const dateISO = new Date(Date.now()).toISOString().slice(0,19);
    const query = 'INSERT INTO tasks(title, status, created) VALUES (?, ?, ?)';
    const [createdTask] = await connection.execute(query,[title,status,dateISO]);
    return {insertId: createdTask.insertId};
    };

module.exports = {
    getAll,
    createTask
};