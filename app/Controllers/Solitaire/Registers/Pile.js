class Pile extends Pack {
  /**
   * @param cards Array of Card objects.
   */
  constructor(cards = []) {
    super()

    this.init(cards)
  }

  /**
   * All loaded cards are hidden except for the top one.
   *
   * @param cards Array of Card objects.
   *
   * @return An instance of Pile object.
   */
  init(cards) {
    this.cards = cards

    this.cards.forEach((card) => {
      card.hide()
    })

    this.top().reveal()

    return this
  }

  /**
   * @param card Card object that should be stacked onto Pile.
   *
   * @return Boolean true if a card can be pushed onto Pile.
   */
  validate(card) {
    let top = this.top()

    if (top === undefined) {
      return card.val === 13
    }

    return top.color !== card.color && top.val - 1 === card.val
  }
}
