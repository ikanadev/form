import axios from 'axios'

const checkAuth = () => {
  const token = localStorage.getItem('token')
  return !!token
}
const endpoint = 'http://localhost:4000/api/'

const endpoints = {
  login: 'login',
  formEst: 'form/form-est',
  newUser: 'user',
  usersList: 'users',
  handleActive: 'user/active'
}

const headerConfig = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

const axiosClone = axios.create({
  baseURL: endpoint,
  headers: {
    Authorization: localStorage.getItem('token')
  }
})

export {
  axiosClone as axios,
  checkAuth,
  endpoints,
  headerConfig
}
