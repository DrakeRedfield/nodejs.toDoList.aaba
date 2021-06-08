const inquirer = require('inquirer');
require('colors');

const pause = async () => {
    const question = {
        type: 'input',
        name: 'enter',
        message: `\nPress ${"ENTER".blue} to continue.\n`
    }
}

const readConsole = async ( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if( this.validate.length === 0 ){
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
                name:`${'4.-'.green} To do`
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

module.exports = {
    inquirerMenu,
    pause,
    readConsole,
}