import Resource from './Resource'

class AdminLocationResource extends Resource {
  basePath() {
    return 'admin/locations'
  }
}

export default new AdminLocationResource()
