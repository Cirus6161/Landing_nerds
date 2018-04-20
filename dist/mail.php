<?php

$recepient = "cirus6161@gmail.com";
$userEmail = trim($_POST["email"]);
$sitename = "Landing nerds";
$phone = trim($_POST["cellphone"]);


$massage = "Спасибо, регистрация завершена";

$pagetitle = "Новая заявка с сайта \"$sitename\" email = \"$userEmail\" phone = \"$phone"\";
$success = mail($recepient, $pagetitle, $massage, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
var_dump($success);
return $success;
