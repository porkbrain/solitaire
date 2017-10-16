class Pile extends Stack {
  constructor(cards = []) {
    super(cards)

    this.setCards(cards)
  }

  setCards(cards) {
    this.cards = cards

    this.cards.forEach((card) => {
      card.hide()
    })

    this.top().reveal()

    return this
  }

  validate(cards) {
    cards = this.standardize(cards)

    let top = this.top()

    if (top === undefined) {
      return cards[0].val === 13
    }

    return top.color !== cards[0].color && top.val - 1 === cards[0].val
  }
}
