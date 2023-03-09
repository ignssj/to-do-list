const express = require("express");
const router = express.Router();
const taskController = require("./controllers/taskController");

router.get("/tasks",taskController.getAll);
router.post("/tasks",taskController.createTask);

module.exports = router;

