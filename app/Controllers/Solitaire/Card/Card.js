/**
 * Card is the smallest game unit.
 *
 */
class Card {
  /**
   * __constructor
   * @param val Integer in range [1 - 13] with the card value.
   * @param suit String with card suit. Possible values in ../Static.js
   * @param hidden If hidden, game won't render card's value and suit.
   */
  constructor(val, suit, hidden = false) {
    this.val = val
    this.suit = suit
    this.hidden = hidden
    this.active = false

    if (suit === 'hearts' || suit === 'diams') {
      this.color = 'red'
    } else {
      this.color = 'black'
    }
  }

  /**
   * Methods for toggling card rendering.
   *
   * @return Card Instance of this Card object.
   */
  hide() {
    this.hidden = true

    return this
  }

  reveal() {
    this.hidden = false

    return this
  }

  /**
   * Transcripts values in range of [1 - 13] to actual human readable values.
   *
   * @return Stringable char.
   */
  value() {
    if (CardValues.hasOwnProperty(this.val)) {
      return CardValues[this.val]
    }

    return this.val
  }
}
