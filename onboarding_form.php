<?php  
header("Access-Control-Allow-Origin: *");  
header("Access-Control-Allow-Methods: POST, OPTIONS");  
header("Access-Control-Allow-Headers: Content-Type, Authorization");  
  
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {  
   http_response_code(200);  
   exit;  
}  
  
if ($_SERVER['REQUEST_METHOD'] === 'POST') {  
   $data = json_decode(file_get_contents('php://input'), true);  
  
   // Basic contact fields  
   $name = isset($data['name']) ? htmlspecialchars(trim($data['name'])) : '';  
   $email = isset($data['email']) ? filter_var($data['email'], FILTER_VALIDATE_EMAIL) : '';  
   $phone = isset($data['phone']) ? htmlspecialchars(trim($data['phone'])) : '';  
   $businessName = isset($data['businessName']) ? htmlspecialchars(trim($data['businessName'])) : '';  
   $targetAudience = isset($data['targetAudience']) ? htmlspecialchars(trim($data['targetAudience'])) : '';  
   $websiteUrl = isset($data['websiteUrl']) ? htmlspecialchars(trim($data['websiteUrl'])) : '';  
  
   // Technical requirement fields  
   $hosting = isset($data['hosting']) ? htmlspecialchars(trim($data['hosting'])) : '';  
   $features = isset($data['features']) ? array_map('htmlspecialchars', $data['features']) : [];  
   $performance = isset($data['performance']) ? array_map('htmlspecialchars', $data['performance']) : [];  
   $security = isset($data['security']) ? array_map('htmlspecialchars', $data['security']) : [];  
   $additionalRequirements = isset($data['additionalRequirements']) ? htmlspecialchars(trim($data['additionalRequirements'])) : '';  
  
   // Project management fields  
   $budgetRange = isset($data['budgetRange']) ? htmlspecialchars(trim($data['budgetRange'])) : '';  
   $timeline = isset($data['timeline']) ? htmlspecialchars(trim($data['timeline'])) : '';  
  
   $log_content = "[" . date('Y-m-d H:i:s') . "]\n";  
   $log_content .= "Contact Information:\n";  
   $log_content .= "Name: $name\nEmail: $email\nPhone: $phone\n";  
   $log_content .= "\nBusiness Information:\n";  
   $log_content .= "Business Name: $businessName\nTarget Audience: $targetAudience\nWebsite: $websiteUrl\n";  
   $log_content .= "\nTechnical Requirements:\n";  
   $log_content .= "Hosting Type: $hosting\n";  
   $log_content .= "Features: " . implode(', ', $features) . "\n";  
   $log_content .= "Performance Requirements: " . implode(', ', $performance) . "\n";  
   $log_content .= "Security Requirements: " . implode(', ', $security) . "\n";  
   $log_content .= "Additional Requirements: $additionalRequirements\n";  
   $log_content .= "\nProject Details:\n";  
   $log_content .= "Budget Range: $budgetRange\nTimeline: $timeline\n";  
   $log_content .= "------------------------------\n";  
  
   file_put_contents('email_log.txt', $log_content, FILE_APPEND);  
  
   if ($name && $email && $businessName) {  
      $admin_email = 'Jesse@ottawawebmasters.ca';  
      $admin_subject = 'New Project Inquiry';  
      $admin_headers = "From: no-reply@ottawawebmasters.ca\r\n";  
      $admin_headers .= "Content-Type: text/html; charset=UTF-8\r\n";  
  
      $email_style = "  
        <style>  
           body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }  
           .container { max-width: 600px; margin: 0 auto; padding: 20px; }  
           .header { background: #f5f5f5; padding: 20px; text-align: center; }  
           .content { padding: 20px; }  
           .section { margin-bottom: 20px; }  
           .section-title { color: #E89E1D; font-size: 18px; margin-bottom: 10px; }  
        </style>";  
  
      $admin_email_content = "  
      <html>  
      <head>$email_style</head>  
      <body>  
        <div class='container'>  
           <div class='header'>  
              <h2>New Project Inquiry</h2>  
           </div>  
           <div class='content'>  
              <div class='section'>  
                <div class='section-title'>Contact Information</div>  
                <p>Name: $name</p>  
                <p>Email: $email</p>  
                <p>Phone: $phone</p>  
              </div>  
              <div class='section'>  
                <div class='section-title'>Business Information</div>  
                <p>Business Name: $businessName</p>  
                <p>Target Audience: $targetAudience</p>  
                <p>Current Website: $websiteUrl</p>  
              </div>  
              <div class='section'>  
                <div class='section-title'>Technical Requirements</div>  
                <p>Hosting: $hosting</p>  
                <p>Features: " . implode(', ', $features) . "</p>  
                <p>Performance: " . implode(', ', $performance) . "</p>  
                <p>Security: " . implode(', ', $security) . "</p>  
                <p>Additional Requirements: $additionalRequirements</p>  
              </div>  
              <div class='section'>  
                <div class='section-title'>Project Details</div>  
                <p>Budget Range: $budgetRange</p>  
                <p>Timeline: $timeline</p>  
              </div>  
           </div>  
        </div>  
      </body>  
      </html>";  
  
      $customer_email_content = "  
      <html>  
      <head>$email_style</head>  
      <body>  
        <div class='container'>  
           <div class='header'>  
              <h2>Thank you for your inquiry, $name!</h2>  
           </div>  
           <div class='content'>  
              <p>We've received your project requirements and will review them shortly. Here's a summary of what you've shared with us:</p>  
               
              <div class='section'>  
                <div class='section-title'>Project Overview</div>  
                <p>Business Name: $businessName</p>  
                <p>Technical Requirements:</p>  
                <ul>  
                   <li>Hosting: $hosting</li>  
                   <li>Features: " . implode(', ', $features) . "</li>  
                   <li>Timeline: $timeline</li>  
                </ul>  
              </div>  
               
              <p>We'll be in touch within 1-2 business days to discuss your project in detail.</p>  
              <p>If you have any questions in the meantime, please email us at Jesse@ottawawebmasters.ca</p>  
           </div>  
        </div>  
      </body>  
      </html>";  
  
      if (mail($admin_email, $admin_subject, $admin_email_content, $admin_headers) &&  
        mail($email, "Thank you for contacting Ottawa Web Masters", $customer_email_content, $admin_headers)) {  
        http_response_code(200);  
        echo json_encode(['message' => 'Form submitted successfully']);  
      } else {  
        http_response_code(500);  
        echo json_encode(['error' => 'Failed to send email']);  
      }  
   } else {  
      http_response_code(400);  
      echo json_encode(['error' => 'Required fields missing']);  
   }  
} else {  
   http_response_code(405);  
   echo json_encode(['error' => 'Method not allowed']);  
}  
?>
