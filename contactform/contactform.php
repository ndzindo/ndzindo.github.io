<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate inputs
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    $to = "dzindonedim@gmail.com"; // Your email address
    $subject = "New Contact Form Submission";
    $body = "You have received a new message from $name ($email):\n\n$message";

    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "OK"; // Signal success to the frontend
    } else {
        echo "Error sending email"; // Signal error to the frontend
    }
} else {
    echo "Invalid request method";
}
?>
