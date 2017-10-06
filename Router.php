<?php

/**
 * Scrapes URL and helps.
 */
class Router
{
  private const ROUTES = [
    '/' => 'Solitaire',
    '/help' => 'Help',
    '/login' => 'Auth',
    '/scoreboard' => 'Scoreboard'
  ];

  /**
   *  Returns the name of appropriate string that matches
   *  the directory of Vue compoment.
   *
   *  @return <String> Vue component name.
   */
  public static function get()
  {
    $url = '/' . trim($_SERVER['REQUEST_URI'], '/');

    if (! array_key_exists($url, self::ROUTES)) {
      return 'Error';
    }

    return self::ROUTES[$url];
  }
}
