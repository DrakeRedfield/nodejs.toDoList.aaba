const fs = require('fs');
const root = './db/task.json';

const saveDB = ( data ) => {
    fs.writeFileSync(root,JSON.stringify(data));
}

const getDataDB = () => {
    if(!fs.existsSync(root)){
        return null;
    }
    const info = fs.readFileSync(root,{encoding:'utf-8'});
    // console.log(info);
    return info;
}



module.exports = {
    saveDB,
    getDataDB
}