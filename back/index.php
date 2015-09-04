<?php
 
require 'vendor/autoload.php';
require "notorm-master/NotORM.php";

$app = new \Slim\Slim();

$dsn = 'mysql:host=localhost;dbname=slimframework';
$username = 'root'; 
$password = 'joel@ssku'; 

$pdo = new PDO($dsn, $username, $password);
$db = new NotORM($pdo);

$app->response()->header("Content-Type", "application/json");


$app->get('/login', function() use($app) {
 echo json_encode(array("code" => '202')); 
}); 

$app->get('/logout', function() use($app) {
  echo json_encode(array("code" => '202')); 
});


 $app->post("/registrar", function () use($app, $db) {

        $post = json_decode($app->request()->getBody());


        $postArray = get_object_vars($post);

        $result = $db->usuario->insert($postArray);  

       if ($result){
            
            echo json_encode(
                array("code" => '200', "id" => $result["id"])
            );

       }
       else{
           echo json_encode(array("code" => '202')); 
        }

    });
 
$app->run();
