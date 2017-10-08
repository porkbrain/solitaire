class Model {
  constructor(namespace, json) {
    this.namespace = namespace

    const table = JSON.parse(json)

    if (table === null) {
      return this.init()
    }

    this.data = table.data
    this.pointer = table.pointer
  }

  init(namespace) {
    this.data = []
    this.pointer = null

    this.save()
  }

  getPointer() {
    return this.pointer
  }

  setPointer(value) {
    this.pointer = value

    this.save()
  }

  clearPointer() {
    this.pointer = null

    this.save()
  }

  add(item) {
    this.data.push(item)

    this.save()
  }

  find(where = []) {
    return this.data.filter((row) => {
      for (let col in where) {
        if (row[col] !== where[col]) {
          return false
        }
      }

      return true
    })
  }

  sort(by, how = 'asc', where = []) {
    const rows = this.find(where)

    const order = how === 'asc' ? -1 : 1

    return rows.sort((a, b) => {
      if (a[by] > b[by]) {
        return order * -1
      }

      if (a[by] < b[by]) {
        return order * 1
      }

      return 0
    })
  }

  unique(col, val) {
    return this.data.find((row) => {
      return row[col] === val
    }) === undefined
  }

  save() {
    localStorage.setItem(this.namespace, JSON.stringify({
      data: this.data,
      pointer: this.pointer
    }))
  }
}

window.db = {
  users: new Model('users', localStorage.getItem('users')),
  games: new Model('games', localStorage.getItem('games')),
  comments: new Model('comments', localStorage.getItem('comments'))
}
