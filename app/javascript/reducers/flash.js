import { cloneDeep } from 'lodash'

const flash = (state={}, action) => {
  let reduced = cloneDeep(state)

  switch (action.type) {
    case 'flash:setMessage':
      reduced.message = action.data
    break

    case 'flash:setType':
      reduced.type = action.data
    break

    case 'flash:reset':
      reduced = {}
    break

    default:
    break
  }

  return reduced
}

export default flash
