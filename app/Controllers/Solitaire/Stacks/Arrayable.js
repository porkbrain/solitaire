class Stack {
  constructor(cards) {
    this.setCards(cards)
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

  pop() {
    return this.cards.pop()
  }
}
