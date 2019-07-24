import axios from 'axios'

const checkAuth = () => {
  const token = localStorage.getItem('token')
  return !!token
}
const endpoint = 'http://localhost:4000/api/'
// const endpoint = 'http://192.168.60.83:4000/api/'

const endpoints = {
  login: 'login',
  newUser: 'user',
  usersList: 'users',
  handleActive: 'user/active',
  getForms: id => `user/forms/${id}`,
  student: 'student',
  formEst: 'form/form-est',
  searchFormEst: nro => `form/form-est/${nro}`,
  formPro: 'form/form-pro',
  searchFormPro: pro => `form/form-pro/${pro}`,
  formPre: 'form/form-pre',
  searchFormPre: nro => `form/form-pre/${nro}`,
  formDoc: 'form/form-doc',
  searchFormDoc: nro => `form/form-doc/${nro}`,
  formIns: 'form/form-ins',
  searchFormIns: nro => `form/form-ins/${nro}`
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

const forms = {
  'form-est': { id: 1, name: 'Formulario de Estudiantes', endpoint: endpoints.searchFormEst },
  'form-pro': { id: 2, name: 'Formulario Profesionales', endpoint: endpoints.searchFormPro },
  'form-pre': { id: 3, name: 'Formulario Pre-Facultativo', endpoint: endpoints.searchFormPre },
  'form-doc': { id: 4, name: 'Formulario de Docentes', endpoint: endpoints.searchFormDoc },
  'form-ins': { id: 5, name: 'Formulario Instituciones', endpoint: endpoints.searchFormIns }
}

export {
  axiosClone as axios,
  checkAuth,
  endpoints,
  forms
}
