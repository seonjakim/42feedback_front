import { HOST_URL } from '../../constants'

export const hasSameId = (cadetList, newCadet) =>
  cadetList.some((cadet) => cadet.login === newCadet.login)
export const cadetListWithoutSelectedId = (selectedCadetList, cadetName) =>
  selectedCadetList.filter((cadet) => cadet.login !== cadetName)
export const isEmpty = (obj) => Object.values(obj).some((el) => el.length === 0)

export const projectCreateOrEdit = async (isEdit, details, projectId) => {
  if (isEdit) {
    return await fetch(`${HOST_URL}/project/${projectId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details),
    })
  } else {
    return await fetch(`${HOST_URL}/project`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details),
    })
  }
}
