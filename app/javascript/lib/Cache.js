import md5 from 'blueimp-md5'

class Cache {
  constructor() {
    this.clear()
  }

  clear() {
    this.__cache = {}
  }

  get(keyData) {
    const key = this.key(keyData)

    return this.__cache[key]
  }

  key(data) {
    md5(JSON.stringify(data))
  }

  set(keyData, data) {
    const key = this.key(keyData)

    this.__cache[key] = data
  }
}

export default Cache
