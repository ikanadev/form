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
  getFormEst: id => `form-est/${id}`,
  formPro: 'form/form-pro',
  searchFormPro: pro => `form/form-pro/${pro}`,
  getFormPro: id => `form-pro/${id}`,
  formPre: 'form/form-pre',
  searchFormPre: nro => `form/form-pre/${nro}`,
  getFormPre: id => `form-pre/${id}`,
  formDoc: 'form/form-doc',
  searchFormDoc: nro => `form/form-doc/${nro}`,
  getFormDoc: id => `form-doc/${id}`,
  formIns: 'form/form-ins',
  searchFormIns: nro => `form/form-ins/${nro}`,
  getFormIns: id => `form-ins/${id}`
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
  'form-est': {
    id: 1,
    name: 'Formulario de Estudiantes',
    seachForm: endpoints.searchFormEst,
    getForm: endpoints.getFormEst
  },
  'form-pro': {
    id: 2,
    name: 'Formulario Profesionales',
    searchForm: endpoints.searchFormPro,
    getForm: endpoints.getFormPro
  },
  'form-pre': {
    id: 3,
    name: 'Formulario Pre-Facultativo',
    searchForm: endpoints.searchFormPre,
    getForm: endpoints.getFormPre
  },
  'form-doc': {
    id: 4,
    name: 'Formulario de Docentes',
    searchForm: endpoints.searchFormDoc,
    getForm: endpoints.getFormDoc
  },
  'form-ins': {
    id: 5,
    name: 'Formulario Instituciones',
    searchForm: endpoints.searchFormIns,
    getForm: endpoints.getFormIns
  }
}

export {
  axiosClone as axios,
  checkAuth,
  endpoints,
  forms
}
