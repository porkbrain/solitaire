class Stack {
  constructor() {
    this.cards = []
  }

  reset(cards = []) {
    let old = this.cards

    this.cards = cards

    return old
  }

  top() {
    return this.cards[this.cards.length - 1]
  }

  bottom() {
    return this.cards[0]
  }

  empty() {
    return this.cards.length === 0
  }

  pop(cards) {
    if (! _.isArray(cards)) {
      return this.cards.shift()
    }

    return this.cards.splice(this.cards.length - cards.length)
  }

  reverse() {
    this.cards.reverse()

    return this
  }
}
