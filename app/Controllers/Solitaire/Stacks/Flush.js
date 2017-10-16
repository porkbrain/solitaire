class Flush extends Stack {
  validate(cards) {
    cards = this.standardize(cards)

    if (cards.length !== 1) {
      return false
    }

    let top = this.top()

    if (top === undefined) {
      return cards[0].val === 1
    }

    return top.suit === cards[0].suit && top.val + 1 === cards[0].val
  }
}
