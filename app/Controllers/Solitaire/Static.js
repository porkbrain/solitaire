Suits = {
 hearts: {
   icon: '♥',
   id: 0
 },
 diams: {
   icon: '	♦',
   id: 1
 },
 spades: {
   icon: '♠',
   id: 2
 },
 clubs: {
   icon: '♣',
   id: 3
 }
}

CardValues = {
 1: 'A', 11: 'J', 12: 'Q', 13: 'K'
}

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
