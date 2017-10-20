/**
 * Parent class for all register stacks. In code children instances of Pack
 * are referred to as stack. It is important that this class is always loaded
 * before Registers directory in Blader otherwise whole app crashes.
 *
 */
class Pack {
  constructor() {
    this.cards = []
  }

  /**
   * @param card Optional array of Card objects to be loaded in a stack.
   *
   * @return old Array of rewritten Card objects.
   */
  reset(cards = []) {
    let old = this.cards

    this.cards = cards

    return old
  }

  /**
   * @return Last Card object in the stack.
   */
  top() {
    return this.cards[this.cards.length - 1]
  }

  /**
   * @return Boolean that's true if the array of Card objects is empty.
   */
  empty() {
    return this.cards.length === 0
  }

  /**
   * @return Instance of stack object.
   */
  reverse() {
    this.cards.reverse()

    return this
  }

  /**
   * @param card Card object to remove from stack. Automaticly will include all
   *             Cards that follow. If no Card is specified, returns top Card.
   *
   * @return Array of Card objects that have been removed from the stack.
   */
  pop(card = false) {
    if (! card) {
      return this.cards.shift()
    }

    let index = this.cards.length - this.cards.findIndex((search) => {
      return search.val === card.val && search.suit === card.suit
    })

    return this.cards.splice(this.cards.length - index);
  }

  /**
   * @param cards Either single Card or array of Cards to push upon the stack.
   *
   * @return An instance of current stack.
   */
  push(cards) {
    if (! _.isArray(cards)) {
      cards = [cards]
    }

    for (let card in cards) {
      this.cards.push(cards[card])
    }

    return this
  }

  /*abstract*/ validate() {throw new Error('validate method is required')}
}
