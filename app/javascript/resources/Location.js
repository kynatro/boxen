import Resource from './Resource'

class LocationResource extends Resource {
  basePath() {
    return 'locations'
  }
}

export default new LocationResource()
