import { navigate } from 'gatsby'
import { toast } from 'react-toast'

export const questionWithTitleContent = data => dispatch => {
  try {
    dispatch({
      type: 'ALL_QUESTION',
      payload: data
    })

    navigate('/post')
    toast.success('You applied new question successfully.')
  } catch (error) {
    toast.error(error.message)
  }
}
