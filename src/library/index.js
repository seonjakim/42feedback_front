import { HOST_URL } from '../constants'
export const isEmpty = (obj) => Object.values(obj).some((el) => el.length === 0)

export const fetchData = async (url, callback, options) => {
  let fetchOptions = {
    credentials: 'include',
  }
  if (options) {
    fetchOptions = Object.assign(fetchOptions, options)
  }
  const response = await fetch(`${HOST_URL}${url}`, fetchOptions)
  console.log(response)
  const data = await response.json()
  callback(data)
}

export const fetchPost = async (url, options) => {
  let fetchOptions = {
    credentials: 'include',
  }
  if (options) {
    fetchOptions = Object.assign(fetchOptions, options)
  }
  console.log(fetchOptions)
  return await fetch(`${HOST_URL}${url}`, fetchOptions)
}
