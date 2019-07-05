import axios from 'axios'

const checkAuth = () => {
  const token = localStorage.getItem('token')
  return !!token
}
const endpoint = 'http://localhost:4000/api/'
// const endpoint = 'http://192.168.60.83:4000/api/'

const endpoints = {
  login: 'login',
  formEst: 'form/form-est',
  newUser: 'user',
  usersList: 'users',
  handleActive: 'user/active',
  student: 'student',
  searchFormEst: nro => `form/form-est/${nro}`
}

const axiosClone = axios.create({
  baseURL: endpoint,
  headers: {
    Authorization: localStorage.getItem('token')
  }
})
axiosClone.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('token') // eslint-disable-line
  return config
})

export {
  axiosClone as axios,
  checkAuth,
  endpoints
}
