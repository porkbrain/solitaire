<?php

/**
 *  Provides dynamic HTML echoing. Named after Laravel templating engine.
 */
class Blader
{
  private $component;

  /**
   * @param $component Name of Vue component.
   */
  function __construct($component)
  {
    $this->component = $component;
  }

  /**
   * Boots the main layout file and passes Blade instance to it.
   */
  public function boot()
  {
    require 'partials/layout.php';
  }

  /**
   * Prints file template in partials.
   */
  public function partial($file)
  {
    echo file_get_contents('partials/' . $file . '.php');
  }

  /**
   * Includes all Vue route components.
   */
  public function component()
  {
    $this->loadDir('./app/Controllers/' . $this->component);
  }

  /**
   * Echoes recursivelly all files in directory.
   */
  private function loadDir(String $path)
  {
    // Loads all files in directory and removes relative paths.
    $files = array_filter(scandir($path), function($file) {
      return trim($file, '.') !== '';
    });

    foreach ($files as $file) {
      // If the item is a directory, loads all files in it.
      if (filetype($path . '/' . $file) == 'dir') {
        $this->loadDir($path . '/' . $file);
        continue;
      }

      $content = file_get_contents($path . '/' . $file);

      // If the file is a plain Javascript, we have to embed it into script tag.
      if (pathinfo($file)['extension'] == 'js') {
        echo "<script>$content</script>";
        continue;
      }

      echo $content;
    }
  }
}
