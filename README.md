# Solitaire
A web project for CSD 2550 course. Solitaire (Klondike) is a simple card game for one player.

## Menu
* New game
* Reset game
* Highscore
* Auth

Page asks for confirmation upon clicking _New game_ or _Reset game_ for better usability.

## PHP
We use PHP to print out header and footer. There's also a hint request on the
page that asks a PHP script for some help via AJAX.

## Auth
In order to play the game, one has to login or register. User info is stored in
local storage.

## Highscore
Every time player starts a new game a timer triggers. The timer stops on game ends
and the less time it took to finish the game, the better player gets to be placed
on Highscore board.

Highscore board is a simple table. Items are sorted by time and the records of
a logged player are highlighted. Highscores are stored in local storage.

Contains a comments section. Comments are stored in local storage as well.
One can add a text a tags to his comment. It is posted with name of a logged user.

## Classes
### Stack
A constructor takes an array of _card_ objects and an integer _max cards_.

**Methods**
* `pop`
* `shift`
* `bottom`
  * Returns a reference to the last card in stack.
* `top`
  * Returns a reference to the first card in stack.
* `reverse`
* `push`
  * Either an array of cards or one card object.
* `reset`
  * Deletes all current cards in stack. Optional argument is an array of cards to load onto the stack.
* `cards`

### Card
A constructor takes an integer _suit_, an integer _value_ and a boolean _hidden_.

**Methods**
* `color`
  * Gets determined by suit.
* `suit`
* `val`
  * Returns the value of a card in range _[_ **1** - **13** _]_.
* `hide`
* `reveal`
* `isHidden`

## Registers

### Deck
Deck registers extend `Stack::class`. Important global is rereads, which
defines how many rereads of the deck are there left for a player. Default value
equals *3* and every time you call `reread`, it decrements. Once it is 0,
you can't reread anymore.

* **D[0]**
  * Maximum of 24 cards.
  * _Default_ is 24 cards.
  * When clicked, it pushes top card to register D[1].
  * `reread` If D[0] is empty and there are rereads available, it takes back all cards from D[1], reverses them and flips them.
* **D[1]**
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

  let top = to.last()

  /**
   * Cards can be put on each other if they're of different color and
   * the last card from the register is one higher than the first card from
   * the array of cards we are stacking on the register.
   */
  return (top.color() !== cards[0].color() && top.val() - 1 === cards[0].val())
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

  let top = to.top()

  return (top.suit() === card.suit() && top.val() + 1 === card.val())
}

```

## Game generation
1. `freshDeck` generates a deck containing **52** unique card objects.
2. `dealCards` deals cards into registers.
3. `startTimer` tracks the time it took player to finish the game.

`freshDeck` pseudocode
```javascript

for (let val = 1; val < 14; val++) {
  for(let suit in suits) {
    cards.push(...)
  }
}

```

## Frameworks and libraries

[Vue.js](https://vuejs.org/)

[Vue.Draggable](https://github.com/SortableJS/Vue.Draggable)

[Lodash](https://lodash.com/)
