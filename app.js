require('colors');
const { menuOption } = require('./utils/utils');

const Task = require('./models/task');
const Tasks = require('./models/tasks');
const { inquirerMenu, pause } = require('./utils/inquiter');

const main = async () => {
    let option = '0';
    const tasks = new Tasks();
    const options = menuOption(tasks);
    
    do {

        const { option } = await inquirerMenu();
        options[option]();
        await pause();
    } while (option !== '0');
}

main();