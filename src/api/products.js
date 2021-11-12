import { settedAxios } from '../api'

export async function cancelPurchase(productId) {
  const { data } = await settedAxios.post('/products/cancel', { productId })
}

export async function confirmedPurchase(productId) {
  const { data } = await settedAxios.post('/products/ok', { productId })
}
