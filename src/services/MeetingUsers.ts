import request from '@/config/axiosInstance'
import { getToken } from '@/helpers/tokens'

export const getUsers = async () => {
  try {
    const response = await request.get('/api/users', {
      headers: {
        Authorization: `Bearer ${getToken('auth')}`
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const addToDislikesList = async (userId: number) => {
  try {
    const response = await request.post(
      `/api/user/dislikes/add/${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken('auth')}`
        }
      }
    )
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.error(error)
  }
}