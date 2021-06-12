const { v4: uuidv4 } = require('uuid');

class Task {
    id = '';
    desc = '';
    completedAt = null;

    constructor( desc, id = '', completedAt = null ){
        if( id !== ''){
            this.id = id;
        }else{
            this.id = uuidv4();
        }
        this.desc = desc;
        this.completedAt = completedAt;
    }

};

module.exports = Task;