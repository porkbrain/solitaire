<?php

/**
 *  Provides dynamic HTML echoing.
 */
class Blader
{
  private $component;

  /**
   *  @param $component Name of Vue component.
   */
  function __construct($component)
  {
    $this->component = $component;
  }

  /**
   *  Prints file template in partials.
   */
  public function partial($file)
  {
    echo file_get_contents('partials/' . $file . '.php');
  }

  /**
   *  Includes all Vue route components.
   */
  public function component()
  {
    $dir = scandir('./app/' . $this->component);

    // Removes relative paths.
    $files = array_filter($dir, function($file) {
      return trim($file, '.') !== '';
    });

    foreach ($files as $file) {
      echo file_get_contents('./app/' . $this->component . '/' . $file);
    }
  }
}
