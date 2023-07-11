 
const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
    // res.json({message:"Hello There............"});
    const todo = await ToDoModel.find();
    // console.log("Welcome to gettodo function");
    
    res.send(todo);
}

module.exports.saveToDo = (req, res) => {
    const { text,done } = req.body;
    // console.log(text);
    // console.log(done);

    ToDoModel
        .create({ text,done })
        .then((data) =>{ 
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;

    console.log('id ---> ', _id);

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateToDo = (req, res) => {
    const { _id, text } = req.body;

    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.doneToDo = (req, res) => {
    const { _id, done } = req.body;

    ToDoModel
        .findByIdAndUpdate(_id, { done })
        .then(() => res.set(201).send("Updated as done..."))
        .catch((err) => console.log(err));
}
