class Card {
  constructor(val, suit, hidden = true) {
    this.val = val
    this.suit = suit
    this.hidden = hidden

    if (Suits[suit].id <= 1) {
      this.color = 'red'
    } else {
      this.color = 'black'
    }
  }

  hide() {
    this.hidden = true

    return this
  }

  reveal() {
    this.hidden = false

    return this
  }

  value() {
    if (CardValues.hasOwnProperty(this.val)) {
      return CardValues[this.val]
    }

    return this.val
  }
}