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

    deleteTask( id = ' '){
        if( this._listado[id] ){
            delete this._listado[id];
        }
    }

    loadData( tasks = {} ){
        Object.keys(tasks).forEach( el =>{
            const task = new Task(
                                    tasks[el].desc,
                                    tasks[el].id,
                                    tasks[el].completedAt 
                                );
            this._listado[tasks[el].id] = task;
        });
    }

    newTask(desc = ''){
        const task = new Task(desc);
        this._listado[task.id] = task;
    }

    listAllTask(){
        console.log();
        Object.keys( this._listado ).forEach( (key,i) => {
            const { desc, completedAt } = this._listado[key];
            i++;
            const isCompleted = (completedAt
                                    ? 'Completado'.green
                                    :'Pendiente'.red);
            const str = `${`${i}.`.cyan} ${desc}:: ${isCompleted}`;
            console.log(str);
        });
        console.log();
    }

    listBy( completed = false ){
        let i = 0;
        console.log();
        Object.keys( this._listado ).forEach( (key) => {
            const { desc, completedAt } = this._listado[key];
            if( (completedAt && completed) || (!completedAt && !completed) ){
                i++;
                const isCompleted = (completedAt
                                    ? completedAt.green
                                    :'Pendiente'.red);
                const str = `${`${i}.`.cyan} ${desc}:: ${isCompleted}`;
                console.log(str);
            }
        });
        if( i === 0 ){
            console.log(`No hay tareas ${completed? 'Completadas'.green:'Pendientes'.red}`)
        }
        console.log()
    }

    toggleCompleted( ids = [] ){
        ids.forEach( id => {
            const task = this._listado[id];
            if( !task.completedAt ){
                task.completedAt = new Date().toISOString();
            }
        });
        this.getAllTask.forEach( task => {
            if( !ids.includes(task.id) ){
                this._listado[task.id].completedAt = null;
            }
        })
    }
}

module.exports = Tasks;