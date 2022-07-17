
const log_list = ['bacnet-err.log', 'bacnet-out.log', 'batch-err.log', 'batch-out.log', 'database-err.log', 'database-out.log', 'modbus-err.log', 'modbus-out.log']

const fs = require('fs');
    for (let i=0; i < log_list.length; i++) {
        fs.writeFile(`../log/${log_list[i]}`, "",(err) => {
           console.log("error / cannot find file / already cleared")
        });
    }