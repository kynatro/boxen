import Resource from './Resource'

class UserResource extends Resource {
  basePath() {
    return 'users'
  }
}

export default new UserResource()
