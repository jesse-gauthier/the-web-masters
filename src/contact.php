<?php
// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    // You can decide if the origin in $_SERVER['HTTP_ORIGIN'] is something you want to allow, or as shown here, you can allow all origins:
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        // may also be using PUT, PATCH, HEAD etc
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    // Sanitize input
    $name = filter_var($data["name"] ?? '', FILTER_SANITIZE_STRING);
    $email = filter_var($data["email"] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = filter_var($data["phone"] ?? '', FILTER_SANITIZE_STRING);
    $website = filter_var($data["website"] ?? '', FILTER_SANITIZE_URL);
    $service = filter_var($data["service"] ?? '', FILTER_SANITIZE_STRING);
    $contactMethod = filter_var($data["contactMethod"] ?? '', FILTER_SANITIZE_STRING);
    $bestTime = filter_var($data["bestTime"] ?? '', FILTER_SANITIZE_STRING);
    $message = filter_var($data["message"] ?? '', FILTER_SANITIZE_STRING);
    $freeAudit = filter_var($data["freeAudit"] ?? false, FILTER_VALIDATE_BOOLEAN) ? 'Yes' : 'No';
    $acceptTerms = filter_var($data["acceptTerms"] ?? false, FILTER_VALIDATE_BOOLEAN) ? 'Yes' : 'No';

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email address."]);
        exit();
    }

    // Prepare email
    $to = "jesse@ottawawebmasters.ca";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\nService: $service\nContact Method: $contactMethod\nBest Time to Contact: $bestTime\nFree Audit: $freeAudit\nAccepted Terms: $acceptTerms\n\nMessage:\n$message";
    $headers = "From: no-reply@ottawawebmasters.ca\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Function to log email details
    function log_email($data)
    {
        $log_file = 'mail_log.txt';
        $log_entry = date('Y-m-d H:i:s') . " - " . json_encode($data) . "\n";
        file_put_contents($log_file, $log_entry, FILE_APPEND);
    }

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        log_email([
            "status" => "success",
            "name" => $name,
            "email" => $email,
            "phone" => $phone,
            "website" => $website,
            "service" => $service,
            "contactMethod" => $contactMethod,
            "bestTime" => $bestTime,
            "message" => $message,
            "freeAudit" => $freeAudit,
            "acceptTerms" => $acceptTerms
        ]);
        echo json_encode(["status" => "success"]);
    } else {
        log_email([
            "status" => "error",
            "name" => $name,
            "email" => $email,
            "phone" => $phone,
            "website" => $website,
            "service" => $service,
            "contactMethod" => $contactMethod,
            "bestTime" => $bestTime,
            "message" => $message,
            "freeAudit" => $freeAudit,
            "acceptTerms" => $acceptTerms,
            "error_message" => "Failed to send email."
        ]);
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["status" => "invalid_method", "message" => "Only POST method is allowed."]);
}
