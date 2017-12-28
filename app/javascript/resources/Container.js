import Resource from './Resource'

class ContainerResource extends Resource {
  basePath() {
    return 'containers'
  }
}

export default new ContainerResource()
