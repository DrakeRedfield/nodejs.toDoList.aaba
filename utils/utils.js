const { readConsole } = require('./inquiter');

require('colors');

const menuOption = (tasks) => {
    return {
        '1': async () => {
            const text = await readConsole();
            tasks.newTask(text);
            return true; 
        },
        '2': async () => {
            console.log('Opcion 2');
            return true;
        },
        '3': async () => {
            console.log('Opcion 3');
            return true;
        },
        '4': async () => {
            console.log('Opcion 4');
            return true;
        },
        '5': async () => {
            console.log('Opcion 5');
            return true;
        },
        '6': async () => {
            console.log('Opcion 6');
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