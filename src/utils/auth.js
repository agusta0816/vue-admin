import Cookies from 'js-cookie'

const TokenKey = 'token_auth'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, 'Token ' + token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
