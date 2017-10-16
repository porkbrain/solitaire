class Flush extends Stack {
  standardize(card) {
    if (_.isArray(card)) {
      if (card.length !== 1) {
        return false
      }

      return card[0]
    }

    return card
  }

  validate(card) {
    card = this.standardize(card)
    
    if (! card) {
      return false
    }

    let top = this.top()

    if (top === undefined) {
      return card.val === 1
    }

    return top.suit === card.suit && top.val + 1 === card.val
  }

  push(card) {
    this.cards.push(this.standardize(card))

    return true
  }
}
