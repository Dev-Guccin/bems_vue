import axios from 'axios'

export function createInstance(){
    return axios.create({
      baseURL: '/api',
    })
}

export const instance = createInstance()