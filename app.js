require('colors');
const { menuOption } = require('./utils/utils');

const Task = require('./models/task');
const Tasks = require('./models/tasks');
const { inquirerMenu, pause } = require('./utils/inquiter');
const { saveDB, getDataDB } = require('./utils/save-file');

const main = async () => {
    //Var Exit While
    let opt = '0';
    //Task Class
    const tasks = new Tasks();
    //Get Options Menu
    const options = menuOption(tasks);
    //Load Data from .json
    const existData = getDataDB();

    if( existData ){
        const data = JSON.parse(existData);
        tasks.loadData( data );
    }

    // console.log(tasks._listado);
    // await pause();

    do {
        //Print Menu
        const { option } = await inquirerMenu();
        opt = option
        //Do menu option 
        await options[option]();
        saveDB( tasks._listado );
        await pause();
    } while (opt !== '0');
}

main();