const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task: String
})

const TodoModel = mongoose.model("todos",TodoSchema)
MediaSourceHandle.exports = TodoModel