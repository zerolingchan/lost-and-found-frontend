const getUser = () => {
    let user = localStorage.getItem('user')
    return user
}
const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
}
const delUser = () => {
    localStorage.removeItem('user')
}
const isLogin = () => {
    let user = getUser();
    return user != null && user !== '' && user !==  undefined
}
export {isLogin, getUser, setUser, delUser}