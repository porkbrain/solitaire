/**
 * Pack already includes almost all functionality Deck needs. This class serves
 * mainly for code clearance.
 *
 * @extends Pack ../Pack.js
 */
class Deck extends Pack {
  /**
   * @param cards Array of Card objects.
   */
  constructor(cards = []) {
    super(cards)
    this.reset(cards)
  }

  /**
   * Player can never place any cards onto deck object, thus validating is very
   * straight forward. Browsing though deck is done without calling validate.
   *
   * @return false
   */
  validate(cards) {
    return false
  }
}
