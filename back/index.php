<?php
 
require 'vendor/autoload.php';
$app = new \Slim\Slim();
 
$app->get('/', function() use($app) {
    $app->response->setStatus(200);
}); 

$app->get('/getScore/:id', function ($id) {

});

$app->post('/registrar', function() use($app) {
      $app->response->setStatus(200);
      echo 200;
});
 
$app->run();