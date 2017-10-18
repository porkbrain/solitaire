/**
 * Constants for game that serve to beautify the content.
 */
Suits = {
 hearts:  '♥',
 spades:  '♠',
 diams:   '♦',
 clubs:   '♣'
}

CardValues = {
 1: 'A', 11: 'J', 12: 'Q', 13: 'K'
}

// this goes to game.vue
Croupier = {
  init() {
    this.deck = this.fresh()
  },

  fresh() {
    let deck = []

    for (let val = 1; val < 14; val++) {
      for (let suit in Suits) {
        deck.push(new Card(val, suit))
      }
    }

    return _.shuffle(deck)
  },

  deal(amount) {
    return this.deck.splice(0, amount)
  }
}

Croupier.init()
