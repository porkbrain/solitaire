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

    let index = this.cards.length - this.cards.findIndex((card) => {
      return card.val === cards[0].val && card.suit === cards[0].suit
    })

    console.log(index)

    return this.cards.splice(this.cards.length - index);
  }

  reverse() {
    this.cards.reverse()

    return this
  }

  standardize(cards) {
    if (! _.isArray(cards)) {
      return [cards]
    }

    return cards
  }

  push(cards) {
    cards = this.standardize(cards)

    for (let card in cards) {
      this.cards.push(cards[card])
    }

    return this
  }
}
