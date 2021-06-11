const Task = require("./task");

class Tasks {
    _listado = {};

    get getAllTask(){
        const list = [];
        Object.keys( this._listado ).forEach( key => {
            const task = this._listado[key];
            list.push(task);
        });
        return list;
    }

    constructor() {
        this._listado = {};
    }

    newTask(desc = ''){
        const task = new Task(desc);
        this._listado[task.id] = task;
    }
}

module.exports = Tasks;