const checkAuth = () => {
  const token = localStorage.getItem('token')
  return !!token
}
const sm = ''

export { checkAuth, sm }
