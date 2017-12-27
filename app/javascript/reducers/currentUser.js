import { cloneDeep } from 'lodash'

const { current_user } = window.AppMeta

const currentUser = (state=current_user, action) => {
  let reduced = cloneDeep(state)

  return reduced
}

export default currentUser
