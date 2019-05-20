const checkAuth = () => {
  const token = localStorage.getItem('token')
  return !!token
}
const endpoint = 'http://192.168.0.15:4000/api/'

const endpoints = {
  login: `${endpoint}login`
}

export { checkAuth, endpoints }
