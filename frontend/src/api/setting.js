import { instance } from './index.js'

function restartModule(module) {
  return instance.get('/settings/restart_only/'+module)
}

function createPost(postData) {
  return instance.post('/', postData)
}

export { fetchPosts, createPost }
