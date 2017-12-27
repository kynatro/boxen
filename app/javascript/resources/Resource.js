import axios from 'axios'
import Cache from '../lib/Cache'
import { omit } from 'lodash'
import { stringify } from 'query-string'

const paramPattern = (param) => `:${param}`

const extractUrlParams = (url, params={}) => {
  let extracted = {}

  Object.keys(params).forEach((key) => {
    if(url.indexOf(paramPattern(key)) !== -1){
      extracted[key] = params[key]
    }
  })

  return extracted
}

class Resource {
  constructor() {
    this.__connection = axios.create({
      baseUrl: window.location.origin
    })

    this.caches = {
      all: new Cache()
    }
  }

  basePath(params) {
    return ''
  }

  create(params) {
    return this.request({
      method: 'post',
      params
    })
  }

  destroy(id) {
    return this.request({
      action: id,
      method: 'delete'
    })
  }

  get({id='', params}={}) {
    let cached

    if (id) {
      this.caches[id] = this.caches[id] || new Cache()
      cached = this.caches[id].get({id, params})
    } else {
      cached = this.caches.all.get({id, params})
    }

    if(cached) {
      return Promise.resolve(cached)
    }

    return new Promise((resolve, reject) => {
      this.request({
        action: id,
        params
      }).then((response) => {
        if (id) {
          this.caches[id].clear()
        }
        resolve(response)
      }).catch((reason) => {
        reject(reason)
      })
    })
  }

  request({action='', params={}, method='get'}) {
    const omitted = extractUrlParams(this.basePath(params), params)
    const filteredParams = omit(params, Object.keys(omitted))
    const queryString = stringify(filteredParams)
    let url = `${this.url(action, params)}`

    if(method === 'get') {
      url += '.json'

      if(queryString) {
        url += `?${queryString}`
      }
    }

    return this.__connection.request({
      method: method,
      url: url,
      data: filteredParams
    })
  }

  update(id, params) {
    // Allow update to take a single argument
    if(typeof(id) === 'object') {
      params = id
      id = params.id
    }

    return new Promise((resolve, reject) => {
      this.request({
        action: id,
        method: 'put',
        params
      }).then((response) => {
        this.caches[id] && this.caches[id].clear()
        resolve(response)
      }).catch((reason) => {
        reject(reason)
      })
    })
  }

  url(action, params) {
    let basePath = this.basePath(params)
    const urlParams = extractUrlParams(basePath, params)

    Object.keys(urlParams).forEach((key) => {
      basePath = basePath.replace(paramPattern(key), urlParams[key])
    })

    return `/${[basePath, action].join('/')}`.replace(/\/$/, '')
  }
}

export default Resource
