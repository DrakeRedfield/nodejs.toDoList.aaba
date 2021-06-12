const inquirer = require('inquirer');
require('colors');

const pause = async () => {
    const question = {
        type: 'input',
        name: 'enter',
        message: `\nPress ${"ENTER".blue} to continue.\n`
    }
    const { enter } = await inquirer.prompt( question );
    return enter;
}

const readConsole = async ( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if( value.length === 0 ){
                    return 'Por favor, ingrese un valor.';
                }
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt( question );
    return desc;
}

const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.-'.green} New Task`
            },
            {
                value: '2',
                name:`${'2.-'.green} See Tasks`
            },
            {
                value: '3',
                name:`${'3.-'.green} Task completed`
            },
            {
                value: '4',
                name:`${'4.-'.green} Task pending`
            },
            {
                value: '5',
                name:`${'5.-'.green} Complete tasks`
            },
            {
                value: '6',
                name:`${'6.-'.green} Delete Task`
            },
            {
                value: '0',
                name:`${'0.-'.green} Exit\n`
            },
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('========================='.green);
    console.log('    Select an option     '.white);
    console.log('=========================\n'.green);
    const opt = await inquirer.prompt(menuOptions);
    return opt;
}

const listTaskToDelete = async ( tasks = [] ) => {
    const choices = tasks.map( (task,i) => {
        const idx = `${i+1}.`.green;
        return {
            value: task.id,
            name: `${idx} ${ task.desc }`
        }
    });
    choices.unshift({
        value: '0',
        name: '0. '.green + 'Cancelar'
    })
    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const { id } = await inquirer.prompt(questions);
    return id;
}

const confirm = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]
    const { ok } = await inquirer.prompt(question);
    return ok;
}

const listTaskToCheck = async ( tasks = [] ) => {
    const choices = tasks.map( (task,i) => {
        const idx = `${i+1}.`.green;
        return {
            value: task.id,
            name: `${idx} ${ task.desc }`,
            checked: (task.completedAt? true:false)
        }
    });
    const questions = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ];
    const { ids } = await inquirer.prompt(questions);
    return ids;
}

module.exports = {
    inquirerMenu,
    pause,
    readConsole,
    listTaskToDelete,
    listTaskToCheck,
    confirm,
}