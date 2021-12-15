import { HOST_URL } from '../constants'
export const isEmpty = (obj) => Object.values(obj).some((el) => el.length === 0)

export const fetchData = async (url, callback, options) => {
  let fetchOptions = {
    // method: 'GET',
    // credentials: 'include',
  }
  if (options) {
    fetchOptions = Object.assign(fetchOptions, options)
  }
  const response = await fetch(`${HOST_URL}${url}`, fetchOptions)
  const data = await response.json()
  callback(data)
}