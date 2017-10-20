<?php
/**
 * This file is the only interactive application endpoint.
 *
 * @author Michael Bausano
 *
 * @note
 *  I believe that most of the code is self-explanatory. Most of
 *  the comments across the code are redundant and I wouldn't include them in
 *  real life. However as this app is for educational purposes, I thought it
 *  would be helpful to comment as much as possible. There are reasons
 *  why I don't believe in code over commenting (besides method signatures)
 *   and if you're interested I'd love to discuss them sometimes.
 */

require 'Router.php';

$route = Router::get();

require 'Blader.php';

$blade = new Blader($route);

$blade->boot();
