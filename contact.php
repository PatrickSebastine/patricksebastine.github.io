<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Send the email
$to = 'your-email@example.com';
$subject = 'New message from portfolio website';
$body = "Name: $name\nEmail: $email\nMessage: $message";
$headers = "From: $email";

mail($to, $subject, $body, $headers);

// Redirect the user to a thank-you page
header('Location: thank-you.html');
exit;
?>
