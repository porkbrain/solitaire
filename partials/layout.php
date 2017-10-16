<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Solitaire</title>

    <link rel="shortcut icon" type="image/png" href="/img/cards.png"/>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="/styles/css/master.min.css">
    <link rel="stylesheet" href="/styles/css/game.min.css">

    <!-- Loading external JS libraries. -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.4/vue.min.js"></script>
    <script>
    // move this shit pls
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
    </script>
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min.js"></script>
    <script src="/lib/sortable.js" charset="utf-8"></script>
    <script src="/lib/draggable.js" charset="utf-8"></script>
  </head>
  <body>
    <?php $this->partial('header') ?>

    <div id="app">
      <app></app>
    </div>

    <?php $this->partial('footer') ?>

    <!-- Dynamically including the Vue component. -->
    <?php $this->component() ?>

    <!-- Main JS files are staticly included. -->
    <script src="/app/db.js"></script>
    <script src="/app/main.js"></script>
  </body>
</html>
