class Deck extends Stack {
  constructor(cards = []) {
    super(cards)
  }

  setCards(cards) {
    this.cards = cards
  }

  drawOne(card) {
    this.cards.push(card)
  }
}
