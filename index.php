<?php
require 'Blader.php';

require 'Router.php';

$route = Router::get();

$blade = new Blader($route);

require 'partials/layout.php';
