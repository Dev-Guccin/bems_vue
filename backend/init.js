let Handler = require('./utils/handler')
const config = require('./config')

const init = {
  initPm2Restart: async function () {
    console.log('initPm2')
    // Handler.start_module("modbus", "./utils/modules/Modbus_module.js")// 재실행
    // Handler.start_module("bacnet", "./utils/modules/Bacnet_module.js")// 재실행
    // Handler.start_module("database", "./utils/modules/Database_module.js")// 재실행
    console.log(config.module)
    // modbus
    if (config.module.modbus == 1) {
      console.log('init modbus!!')
      await Handler.restart_only('modbus')
    }
    console.log("modbus checked!")
    if (config.module.bacnet == 1) {
      console.log('init bacnet!!')
      await Handler.restart_only('bacnet')
    }
    console.log('bacnet checked!')
    if (config.module.database == 1) {
      console.log('init database!!')
      await Handler.restart_only('database')
    }
    console.log('database checked!')
    if (config.module.batch == 1) {
      console.log('init batch!!')
      await Handler.restart_only('batch')
    }
    console.log('batch checked!')
    if (config.module.xml == 1) {
      console.log('init xml!!')
      await Handler.restart_only('xml')
    }
    console.log('xml checked!')
  },
}
module.exports = init
