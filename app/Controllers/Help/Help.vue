<template id="help-template">
  <div class="content">
    <div class="left">
      <div class="line text-left">
        <h2>History</h2>
        <p>
          Solitaire is an american expression used for <b>Patience</b> card games.
          They have often similar rules and mutual trait is that one doesn't
          need other people to play them as your only opponent is chance.
        </p>
        <p>
          These card games became popular from 17th century France among nobles
          and political prisoners as a fun way to pass the time.
        </p>
        <p>
          Fan of these games were for example <b>Napoleon</b> and <b>Marie Antoinnette</b>.
        </p>
      </div>
      <div class="line text-left">
        <h2>How to win</h2>
        <p>
          Klondike is the most known Solitaire game. The goal is to stack all
          cards of same suit in ascending order on one of four designated piles.
        </p>
        <p>
          A game ends once all <b>52</b> cards (4 suits * 13 cards) are <b>stacked</b>,
          although it's important to keep in mind not every game is solvable and
          with every wrong decision the tree of solutions shrinks.
        </p>
      </div>
      <div class="line text-left">
        <h2>Rules</h2>
        <p>There are 5 actions that player can take.</p>
        <ul>
        <li>Move the top card of deck on side.</li>
        <li>When deck is empty, move all cards from side back on it in reverse order.</li>
        <li>
          Move 1 - 13 cards from a bottom pile to different bottom pile.
          This is possible under one of these conditions:
          <ul>
            <li>First card is a king and the pile that it's being move to is empty.</li>
            <li>
              First card is different colour and it's value is 1 less than
              the card its being move onto. <i>(e.g. 7♥ onto 8♣)</i>
            </li>
          </ul>
        </li>
        <li>
          Move one card from a bottom pile onto the stacking pile.
          Both cards have to be of same suit and top one's value has to be one
          higher. <i>(e.g. K♥ onto Q♥)</i>
        </li>
        <li>Move one card from side deck onto a bottom or stacking pile.</li>
        </ul>
      </div>
    </div>
    <comments class="right"></comments>
  </div>
</template>

<script type="text/javascript">
  Vue.component('app', {
    template: '#help-template'
  })
</script>
