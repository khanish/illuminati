<?php
if($_SERVER['REQUEST_METHOD'] === 'POST') {
	// EDIT THE 2 LINES BELOW AS REQUIRED
	$name = $_POST['name']; 
	$email_from = $_POST['email']; 
	$contact = $_POST['contact'];
	$country = $_POST['country'];
	$contact = $_POST['contact'];
	$reason = $_POST['reason'];

	$email_to = "csama.jr@gmail.com";
	$email_subject = "I am interested in joining the illuminati";

	$msg = "Name: ".$name."\nContact: ".$contact."\nCountry: ".$country."\nReason: ".$reason;
		
	$emailBody = $email_subject.'\n'.$email_from.'\n'.$msg;
	
	// create email headers
	$headers = 'From: '.$email_from."\r\n";
	$header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";
	mail($email_to, $email_subject, $email_message, $headers);
}
else {
    print("Error in data");
}
?>

