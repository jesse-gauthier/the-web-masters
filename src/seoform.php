<?php
// Allow CORS requests from any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Preflight request for CORS
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the posted data
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate the data
    $name = isset($data['name']) ? htmlspecialchars($data['name']) : '';
    $email = isset($data['email']) ? filter_var($data['email'], FILTER_VALIDATE_EMAIL) : '';
    $website = isset($data['website']) ? filter_var($data['website'], FILTER_VALIDATE_URL) : '';
    $message = isset($data['message']) ? htmlspecialchars($data['message']) : '';
    $newsletter = isset($data['newsletter']) && $data['newsletter'] ? 'Yes' : 'No';

    // Check for required fields
    if ($name && $email && $website) {
        // Email details
        $to = 'Jesse@ottawawebmasters.ca';
        $subject = 'New SEO Audit Request';
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Email content
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Website: $website\n";
        $email_content .= "Additional Information: $message\n";
        $email_content .= "Newsletter Signup: $newsletter\n";

        // Send the email
        if (mail($to, $subject, $email_content, $headers)) {
            http_response_code(200);
            echo json_encode(['message' => 'SEO audit request sent successfully.']);
        } else {
            http_response_code(500);
            echo json_encode(['message' => 'Failed to send email.']);
        }
    } else {
        // Missing required fields
        http_response_code(400);
        echo json_encode(['message' => 'Please fill in all required fields.']);
    }
} else {
    // Invalid request method
    http_response_code(405);
    echo json_encode(['message' => 'Method Not Allowed']);
}
