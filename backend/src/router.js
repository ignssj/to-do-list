const express = require("express");
const router = express.Router();
const taskController = require("./controllers/taskController");
const taskMiddleware = require("./middlewares/tasksMiddleware");

router.get("/tasks",taskController.getAll);
router.post("/tasks",taskMiddleware.validateTitle,taskMiddleware.validateStatus,taskController.createTask);
router.delete("/tasks/:id",taskController.deleteTask);
router.put("/tasks/:id",taskMiddleware.validateTitle,taskMiddleware.validateStatus,taskController.updateTask);

module.exports = router;

