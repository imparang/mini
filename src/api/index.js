import axios from 'axios'
import router from '../routes'

const DOMAIN = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api'
const UNAUTHORIZED = 401
const onUnauthorized = () => {
  router.push(`/login?rPath=${encodeURIComponent(location.pathname)}`)
}

const userRequest = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    headers: {
      'content-type': 'application/json',
      apikey: 'FcKdtJs202110',
      username: '5zo'
    },
    data
  })
    .then(res => res.data)
    .catch(result => {
      const { status } = result.response
      if (status === UNAUTHORIZED) onUnauthorized()
      throw result.response
    })
}

const adminRequest = (method, url, masterKey, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    headers: {
      'content-type': 'application/json',
      apikey: 'FcKdtJs202110',
      username: '5zo',
      masterKey: masterKey
    },
    data
  })
    .then(res => res.data)
    .catch(res => console.log(res.response))
}

export const user = {
  search(searchText, searchTags) {
    return userRequest('POST', '/products/search', { searchText })
  },
  detail(id) {
    return userRequest('GET', `/products/${id}`)
  },
  pay(productId, accountId) {
    return userRequest('POST', '/products/buy', { productId, accountId })
  },
  checkAccount() {
    return userRequest('GET', '/account/banks')
  },
  createAccount(bankCode, accountNumber, phoneNumber, signature) {
    return userRequest('POST', '/account', {
      bankCode,
      accountNumber,
      phoneNumber,
      signature
    })
  },
  showAccount() {
    return userRequest('GET', '/account')
  },
  Allbuy() {
    return userRequest('GET', '/products/transactions/details')
  },
  cancle(productId) {
    return userRequest('POST', '/products/cancel', { productId })
  },
  confirmed(productId) {
    return userRequest('POST', '/products/ok', { productId })
  }
}

export const admin = {
  login(email, password) {
    return userRequest('POST', '/auth/login', { email, password })
  },
  signup(email, password, displayName) {
    return userRequest('POST', '/auth/signup', { email, password, displayName })
  },
  showSellList() {
    return adminRequest('GET', '/products/transactions/all', true)
  },
  addProduct(data) {
    return adminRequest('POST', '/products', true, { ...data })
  },
  showAllProducts() {
    console.log(axios.defaults.headers.common)
    return adminRequest('GET', '/products', true)
  }
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token
    ? `Bearer ${token}`
    : null
}

const { token } = sessionStorage
if (token) setAuthInHeader(token)
