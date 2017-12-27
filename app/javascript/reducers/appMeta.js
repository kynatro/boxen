import { cloneDeep } from 'lodash'

const { AppMeta } = window

const appMeta = (state=AppMeta, action) => {
  let reduced = cloneDeep(AppMeta)

  return reduced
}

export default appMeta
