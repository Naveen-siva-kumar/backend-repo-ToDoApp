

const { Router } = require("express");

const { getToDo, saveToDo, deleteToDo, updateToDo, doneToDo} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);

router.post("/save", saveToDo);

router.post("/update", updateToDo);

router.post("/delete", deleteToDo);

router.post("/done",doneToDo);

module.exports = router;