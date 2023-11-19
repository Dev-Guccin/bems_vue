var mysql = require("mysql");

const config = require("./config");

const connection = mysql.createConnection(config.dbConfig);
connection.connect();

var Database = {
  realtimeUpsert: function (gms, key) {
    const finalObjectName = `${gms.getObjectName()}_${key}`;
    const value =
      gms[key].type == String
        ? gms[key].change[gms[key].value]
        : gms[key].value;
    let query = `insert into realtime_table (id, object_name, log_value, log_time ,object_type, network_type )
    values (0,'${finalObjectName}',${value}, now(),'AI','xml') as t
    on duplicate key update log_value=t.log_value, log_time=t.log_time`;
    connection.query(query, (error, rows, fields) => {
      if (error) throw error;
    });
  },
  selectNotNull: function (network_type) {
    return new Promise(function (resolve, reject) {
      connection.query(
        `SELECT * from realtime_table where ctrl_value is not null and network_type = '${network_type}'`,
        (error, rows, fields) => {
          if (error) throw error;
          resolve(rows);
        }
      );
    });
  },
  updateCtrlValueToNull: function (rowId) {
    console.log(rowId);
    return new Promise(function (resolve, reject) {
      connection.query(
        `UPDATE realtime_table SET ctrl_value=null where id=${rowId}`,
        (error, rows, fields) => {
          if (error) throw error;
          resolve(rows);
        }
      );
    });
  },
};
module.exports = Database;
