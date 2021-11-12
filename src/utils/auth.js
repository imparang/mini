import axios from 'axios'

export default async function () {
  const token = sessionStorage.getItem('token')
  const { data } = await axios({
    url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me', 
    method: 'POST', 
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202110',
      'username': 'CheongJaeYun',
      authorization: `Bearer ${token}`
    }
  })
  return data
}
