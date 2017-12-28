import Resource from './Resource'

class AdminUserResource extends Resource {
  basePath() {
    return 'admin/users'
  }
}

export default new AdminUserResource()
