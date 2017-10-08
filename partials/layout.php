<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Solitaire</title>

    <link rel="shortcut icon" type="image/png" href="/img/cards.png"/>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="/styles/css/master.min.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.4/vue.min.js" charset="utf-8"></script>
    <script src="/lib/sortable.js" charset="utf-8"></script>
    <script src="/lib/draggable.js" charset="utf-8"></script>
  </head>
  <body>
    <!-- Including the navigation based on loaded route. -->
    <?php $blade->partial('header') ?>

    <div id="app">
      <app></app>
    </div>

    <!-- This looks better with a comment. -->
    <?php $blade->partial('footer') ?>

    <!-- Including the Vue component. -->
    <?php $blade->component() ?>

    <script src="/app/db.js"></script>
    <script src="/app/main.js"></script>
  </body>
</html>
