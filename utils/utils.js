const { readConsole, listTaskToDelete, confirm, listTaskToCheck } = require('./inquiter');

require('colors');

const menuOption = (tasks) => {
    return {
        '1': async () => {
            const text = await readConsole( 'Descripción' );
            tasks.newTask(text);
            return true; 
        },
        '2': async () => {
            // console.log(tasks.getAllTask);
            tasks.listAllTask();
            return true;
        },
        '3': async () => {
            //Completed
            tasks.listBy(true);
            return true;
        },
        '4': async () => {
            // Pending
            tasks.listBy(false);
            return true;
        },
        '5': async () => {
            // console.log('Opcion 5');
            const ids = await listTaskToCheck(tasks.getAllTask)
            tasks.toggleCompleted(ids);
            return true;
        },
        '6': async () => {
            // Delete Tasks
            const id = await listTaskToDelete(tasks.getAllTask);
            if( id !== '0' ){
                const isConfirm = await confirm('¿Estás seguro de eliminar esta tarea? Este proceso no puede revertirse.')
                if( isConfirm ){
                    tasks.deleteTask( id );
                    console.log('Tarea Borrada Excitosamente.'.green);
                }
            }
            return true;
        },
        '0': async () => {
            console.log('Opcion 0');
            return true;
        },
    }
}

module.exports = {
    menuOption
}