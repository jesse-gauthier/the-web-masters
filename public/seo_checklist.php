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
    $email = isset($data['email']) ? filter_var($data['email'], FILTER_VALIDATE_EMAIL) : '';

    // Check for required fields
    if ($email) {
        // Email details for the admin (you)
        $admin_email = 'Jesse@ottawawebmasters.ca';
        $admin_subject = 'New SEO Checklist Request';
        $admin_headers = "From: $email\r\n";
        $admin_headers .= "Reply-To: $email\r\n";
        $admin_headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        // Admin email content
        $admin_email_content = "
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                }
                .email-container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #e2e2e2;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                }
                .email-header {
                    text-align: center;
                    padding-bottom: 20px;
                }
                .email-header h2 {
                    margin: 0;
                    color: #E89E1D;
                    font-size: 24px;
                }
                .email-body {
                    padding: 20px;
                    background-color: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .email-footer {
                    text-align: center;
                    padding-top: 20px;
                    font-size: 0.9em;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class='email-container'>
                <div class='email-header'>
                    <h2>New SEO Checklist Request</h2>
                </div>
                <div class='email-body'>
                    <p><strong>Email:</strong> $email</p>
                    <p><strong>Requested:</strong> SEO Checklist</p>
                </div>
                <div class='email-footer'>
                    <p>Thank you for using our service!</p>
                </div>
            </div>
        </body>
        </html>";

        // Log the email content to a file
        $log_content = "[" . date('Y-m-d H:i:s') . "]\n";
        $log_content .= "Email: $email\nRequested: SEO Checklist\n";
        $log_content .= "--------------------------\n";
        file_put_contents('email_log.txt', $log_content, FILE_APPEND);

        // Send the email to the admin
        mail($admin_email, $admin_subject, $admin_email_content, $admin_headers);

        // Email details for the customer
        $customer_subject = 'Your Free SEO Checklist';
        $customer_headers = "From: Jesse@ottawawebmasters.ca\r\n";
        $customer_headers .= "Reply-To: Jesse@ottawawebmasters.ca\r\n";
        $customer_headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        // Customer email content
$customer_email_content = "
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #e2e2e2;
            border-radius: 8px;
            background-color: #f9f9f9;
        }
        .email-header {
            text-align: center;
            padding-bottom: 20px;
        }
        .email-header h2 {
            margin: 0;
            color: #E89E1D;
            font-size: 24px;
        }
        .email-body {
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center; /* Center text and image */
        }
        .email-footer {
            text-align: center;
            padding-top: 20px;
            font-size: 0.9em;
            color: #777;
        }
        .download-link {
            display: inline-block;
            padding: 10px 15px;
            background-color: #E89E1D;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            text-align: center;
        }
        .download-link:hover {
            background-color: #d77b00;
        }
        .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }
        .image-container img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <div class='email-container'>
        <div class='email-header'>
            <h2>Your Free SEO Checklist</h2>
        </div>
        <div class='email-body'>
            <div class='image-container'>
                <img src='https://ottawawebmasters.ca/logo.png' alt='Ottawa Web Masters Logo' />
            </div>
            <p>Hello,</p>
            <p>Thank you for requesting our SEO checklist. You can download it using the link below:</p>
            <p><a href='https://ottawawebmasters.ca/seo_checklist.pdf' class='download-link'>Download SEO Checklist</a></p>
            <p>- Ottawa Web Masters</p>
        </div>
        <div class='email-footer'>
            <p>&copy; " . date('Y') . " Ottawa Web Masters. All rights reserved.</p>
        </div>
    </div>
</body>
</html>";


        // Send the email to the customer
        if (mail($email, $customer_subject, $customer_email_content, $customer_headers)) {
            http_response_code(200);
            echo json_encode(['message' => 'SEO checklist request sent successfully.']);
        } else {
            http_response_code(500);
            echo json_encode(['message' => 'Failed to send email to customer.']);
        }

    } else {
        // Missing or invalid email
        http_response_code(400);
        echo json_encode(['message' => 'Please provide a valid email address.']);
    }
} else {
    // Invalid request method
    http_response_code(405);
    echo json_encode(['message' => 'Method Not Allowed']);
}
?>
