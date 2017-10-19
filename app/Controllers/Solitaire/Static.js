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

Fresh = () => {
  let deck = []

  for (let val = 1; val < 14; val++) {
    for (let suit in Suits) {
      deck.push(new Card(val, suit))
    }
  }

  return _.shuffle(deck)
}

Croupier = {
  cards: Fresh(),

  piles() {
    let cards = this.cards.splice(0, 28).map((card) => {
      return new Card(card.val, card.suit, true)
    })

    return [
      cards.splice(0, 1),
      cards.splice(0, 2),
      cards.splice(0, 3),
      cards.splice(0, 4),
      cards.splice(0, 5),
      cards.splice(0, 6),
      cards.splice(0, 7)
    ]
  },

  deal() {
    let cards = Fresh()

    return {
      piles: this.piles(),
      flushes: [
        [],
        [],
        [],
        []
      ],
      deck: this.cards
    }
  },

  parse(registers) {
    let deck = registers[1].revealed.cards.concat(registers[1].deck.cards)

    let flushes = [
      registers[2].flushes[0].cards,
      registers[2].flushes[1].cards,
      registers[2].flushes[2].cards,
      registers[2].flushes[3].cards
    ]

    let piles = [
      registers[3].piles[0].cards,
      registers[3].piles[1].cards,
      registers[3].piles[2].cards,
      registers[3].piles[3].cards,
      registers[3].piles[4].cards,
      registers[3].piles[5].cards,
      registers[3].piles[6].cards
    ]

    return {
      flushes: flushes,
      piles: piles,
      deck: deck
    }
  }
}
