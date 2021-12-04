let express = require('express')
let Handler = require('../utils/handler')
let router = express.Router()

// modbus 제어, bacnet제어, database제어
// 3가지 모두 pm2를 사용하여 제어를 진행한다.
//api/settings/restart_only/modbus
router.get('/restart_only/:module', function (req, res, next) {
  console.log('restart_only_module : ', req.params.module)
  Handler.restart_only(req.params.module)
  res.send({
    success: true,
    message: `restart ${req.params.module} module`,
  })
})
router.get('/stop_only/:module', function (req, res, next) {
  console.log('stop_only_module : ', req.params.module)
  Handler.stop_only(req.params.module)
  res.send({
    success: true,
    message: `stop ${req.params.module} module`,
  })
})
router.get('/stop_all', function (req, res, next) {
  console.log('stop_all')
  Handler.stop_all()
  res.send({
    success: true,
    message: "stop all module"
  })
})
router.get('/module_check', async function (req, res, next) {
  console.log('module_check')
  let checklist = await Handler.module_check()
  res.send({
    success: true,
    checklist:checklist
  })
})

router.get('/module_log_check/:module/:type', async function (req, res, next) {
  console.log('module_log_check')
  let module = req.params.module
  let type = req.params.type
  let logData = await Handler.get_logfile(module, type)
  res.send({
    success: true,
    logData: logData,
  })
})

module.exports = router
