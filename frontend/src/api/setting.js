import { instance } from './index.js'

function restartModule(module) {
  return instance.get('/settings/restart_only/'+module)
}

function stopModule(module) {
  return instance.get('/settings/stop_only/' + module)
}

function checkModule(){
  return instance.get(`/settings/module_check`)
}

function getLog(module, type){
  return instance.get(`/settings/module_log_check/${module}/${type}`)
}

export { restartModule, stopModule, checkModule, getLog }
