<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Solitaire</title>

    <link rel="shortcut icon" type="image/png" href="/img/cards.png" />

    <!-- Loading CSS framework. -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <!-- Loading icon library. -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

    <link rel="stylesheet" href="/styles/css/master.min.css" />
    <link rel="stylesheet" href="/styles/css/game.min.css" />

    <!-- Loading Vue.js framework. -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.4/vue.min.js"></script>
    <!-- Loading Lodash library that implements many helper functions. -->
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min.js"></script>
  </head>
  <body>
    <!-- Templating header file. -->
    <?php $this->partial('header') ?>

    <!--
     - Main app div that changes based on URL.
     - Adding a new page is simple, one just have to register it in Router
     - and create new directory in Controllers with a Vue file that has
     - a component name 'app'.
     -->
    <div id="app" class="col-md-12">
      <app></app>
    </div>

      <!-- Templating footer file. -->
    <?php $this->partial('footer') ?>

    <!-- Dynamically including the Vue component. -->
    <?php $this->component() ?>

    <!-- Main JS files are staticly included. -->
    <script src="/app/db.js"></script>
    <script src="/app/main.js"></script>
  </body>
</html>
