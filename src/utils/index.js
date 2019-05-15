const checkAuth = () => {
  const token = localStorage.getItem('token')
  return !!token
}
const endpoint = 'http://localhost:4000/api/'

const endpoints = {
  login: `${endpoint}login`
}

export { checkAuth, endpoints }
