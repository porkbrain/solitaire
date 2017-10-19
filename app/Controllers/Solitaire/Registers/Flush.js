/**
 * Flush stack serves to stack all card of same suit onto each other.
 *
 * @extends Pack ../Pack.js
 */
class Flush extends Pack {
  /**
   * @param cards Array of Card objects.
   */
  constructor(cards = []) {
    super(cards)
    this.reset(cards)
  }
  
  /**
   * @param card Card object that should be stacked onto Flush.
   *
   * @return Boolean true if a card can be pushed onto Flush.
   */
  validate(card) {
    let top = this.top()

    if (top === undefined) {
      return card.val === 1
    }

    return top.suit === card.suit && top.val + 1 === card.val
  }
}
