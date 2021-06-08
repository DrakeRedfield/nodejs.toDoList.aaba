const Task = require("./task");

class Tasks {
    _listado = {};

    constructor() {
        this._listado = {};
    }

    newTask(desc = ''){
        const task = new Task(desc);
        this._listado[task.id] = task;
    }
}

module.exports = Tasks;