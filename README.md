# Solitaire
A web project for CSD 2550 course. Solitaire (Klondike) is a simple card game for one player.

## Menu

## Auth

## Highscore

## Game generation

## Classes
### Stack

### Card

## Registers

### Deck
Deck registers extend `Stack::class`. Important global is rereads, which
defines how many rereads of the deck are there left for a player. Default value
equals *3* and every time you call `reread`, it decrements. Once it is 0,
you can't reread anymore.

* D[0]
  * Maximum of 24 cards.
  * _Default_ is 24 cards.
  * When clicked, it pushes top card to register D[1].
  * `reread` If D[0] is empty and there are rereads available, it takes back all cards from D[1], reverses them and flips them.
* D[1]
  * Maximum of 24 cards.
  * _Default_ is 0 cards.
  * Draggable trait limited for one card only and out only.

### Flush
Flush registers extend `Stack::class`. The game ends when all 52 cards are
stored in these registers. Maximum number of cards per register is 13.
_Default_ is 0 cards.

There are 4 flush registers **F[0,..,3]**. They have Draggable trait and only one
card can be put at time. Validating function is `canBeFlushed`.

### Pile
Pile registers extend `Stack::class`. There are 7 Pile registers, **P[0,..,6]**.
Maximum number of cards is 19. Has Draggable trait with validating function
`canBePutOn`. All cards are hidden except top one, top card of register has
always to be revealed.

_Default_ number of cards = register's index + 1.

If there is no hidden card in any Pile register and there is less than 3 cards
in Deck registers, the games ends.

## Draggable
Trait is visually provided by **Vue.Draggable**.

We have two behavior functions, `canBePutOn` serves to check the movement of
cards between Deck and Pile registers, whilst `canBeFlushed` decides whenever
a card can be placed on Flush register.

```javascript
/**
 * @param cards Array of cards
 * @param to    Register object
 *
 * @return Boolean
 */
const canBePutOn = (cards, to) => {
  if (! to.length, && cards[0].isKing()) {
    return true
  }

  let top = to.cards.last()

  /**
   * Cards can be put on each other if they're of different color and
   * the last card from the register is one higher than the first card from
   * the array of cards we are stacking on the register.
   */
  return (top.color() !== cards[0].color() && top.val() -1 === cards[0].val())
}

```

```javascript
/**
 * @param card  Card object
 * @param to    Register object
 *
 * @return Boolean
 */
const canBeFlushed = (card, to) => {
  if (! to.length && card.val() === 1) {
    return true
  }

  let top = to.cards.top()

  return (top.suit() === card.suit() && top.val() + 1 === card.val())
}

```

## Frameworks and libraries

[Vue.js](https://vuejs.org/)

[Vue.Draggable](https://github.com/SortableJS/Vue.Draggable)
