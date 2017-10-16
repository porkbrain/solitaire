class Deck extends Stack {
  constructor(cards = []) {
    super(cards)
    this.setCards(cards)
  }

  validate(cards) {
    return false
  }

  setCards(cards) {
    this.cards = cards

    return this
  }
}
