class Deck extends Pack {
  constructor(cards = []) {
    super(cards)
    this.reset(cards)
  }

  validate(cards) {
    return false
  }
}
