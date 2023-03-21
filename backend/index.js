const express = require("express");
const cors_config = require("./cors_config");
const app = express();

let todos = [
    { id: 1, todo: "learn JS", done: false },
    { id: 2, todo: "learn JAVA", done: false },
    { id: 3, todo: "learn PHP", done: true },
    { id: 4, todo: "learn nodeJS", done: false },
]

app.use(cors_config)
app.use(express.json())

app.get("/api/todos", (req, res) => {
    res.status(200).send(todos)
})
app.get("/api/todos/:id/setCompleted", (req, res) => {
    let id = req.params.id;
    let todo = todos.find(t => t.id == id)
    todo.done = !todo.done
    console.log(todos)
    res.status(200).send({ message: "todo completed successfully !" })
})
app.delete("/api/todos/:id", (req, res) => {

    let id = req.params.id;
    todos = todos.filter(todo => todo.id != id)
    res.status(200).send({ message: "todo deleted successfully" })
})

app.post("/api/todos/add", (req, res) => {
    console.log(req.body)
    if ("req body" + req.body.todo) {
        todos.push({ id: todos.length + 1, todo: req.body.todo, done: false })
    }
    res.status(200).send({ message: "todo added succefully !" })
})

app.listen(3000)