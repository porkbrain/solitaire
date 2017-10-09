/**
 * Model takes care of storing, retriving and formating data.
 * Behaviour inspired by MongoDB API.
 */

class Model {
  /**
   * @param namespace The name of a collection.
   * @param json      Stringified JSON with data.
   */
  constructor(namespace, json) {
    this.namespace = namespace

    const collection = JSON.parse(json)

    if (collection === null) {
      return this.init()
    }

    this.data = collection.data
    this.pointer = collection.pointer
  }

  /**
   * If the collection doesn't exist, create it and init it with an empty array.
   *
   * @param namespace Extends constructor.
   */
  init(namespace) {
    this.data = []
    this.pointer = null

    this.save()
  }

  /**
   * Pointer is purpose free variable stored along with collection data.
   * It's used for storing logged player name or current game id.
   */
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

  /**
   * @param item Any value.
   *
   * @return <Model> Instance of Model.
   */
  add(item) {
    this.data.push(item)

    this.save()

    return this;
  }

  /**
   * Searches the data and matches given properties against it.
   *
   * @param where Array of key: value pairs. If empty, returns all documents.
   *
   * @return <Array> Matched documents.
   */
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

  /**
   * @param by Property name.
   * @param how Specifies ascending or descending order.
   * @param where Extends find method.
   *
   * @return <Array> Matched and sorted documents.
   */
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

  /**
   * @param col Property name.
   * @param val Value that has to be unique.
   *
   * @return <Boolean> Returns true on unique value.
   */
  unique(col, val) {
    return this.data.find((row) => {
      return row[col] === val
    }) === undefined
  }

  /**
   * Saves the colletion to localStorage global object.
   */
  save() {
    localStorage.setItem(this.namespace, JSON.stringify({
      data: this.data,
      pointer: this.pointer
    }))
  }
}

window.db = {
  /**
   * User colletion.
   *
   * @property data Documents of all registered users.
   * @property pointer Name of logged user or null.
   */
  users: new Model('users', localStorage.getItem('users')),

  /**
   * Games colletion.
   *
   * @property data Documents of all games played.
   * @property pointer Id of current game or null.
   */
  games: new Model('games', localStorage.getItem('games')),

  /**
   * Comments colletion.
   *
   * @property data Document of all added comments.
   * @property pointer null
   */
  comments: new Model('comments', localStorage.getItem('comments'))
}
