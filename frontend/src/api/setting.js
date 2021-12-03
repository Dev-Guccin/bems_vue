import { instance } from './index.js'

function restartModule(module) {
  return instance.get('/settings/restart_only/'+module)
}

function stopModule(module) {
  return instance.post('/settings/stop_only/' + module)
}

export { restartModule, stopModule }
