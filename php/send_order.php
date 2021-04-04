<?php
    #header("Access-Control-Allow-Origin: *");
    $discountTypes = [
        'Obertöne Mitglied',
        'Schüler, Student.',
        'Ö1-Club',
        'Ö1-Intro',
    ];

    $sender = $_POST["email"];
	$name = $_POST["name"];
	$street = $_POST["street"];
	$zip_code = $_POST["zip_code"];
	$place = $_POST["place"];
	$country = $_POST["country"];
	$phone = $_POST["phone"];
	$is_sent_by_user = $_POST["is_sent_by_user"];

	$concert_1_cat_a = $_POST["concert_1_cat_a"];
	$concert_1_cat_b = $_POST["concert_1_cat_b"];
	$concert_1_cat_c = $_POST["concert_1_cat_c"];
	$concert_2_cat_a = $_POST["concert_2_cat_a"];
	$concert_2_cat_b = $_POST["concert_2_cat_b"];
	$concert_2_cat_c = $_POST["concert_2_cat_c"];

    $contribution = $_POST["contribution"];
	$is_member = $_POST["is_club_member"];
    $discountType = 'nein';

    $discountTypeIndex = intval($_POST["discount_type"]);
    if ($discountTypeIndex >= 0) {
        $discountType = "<div>" . $discountTypes[$discountTypeIndex] . "</div>";
	}
	
	$client_ip = $_SERVER['REMOTE_ADDR'];
	$is_member_message =  $is_member == 1 ? "ja" : "nein";

	$email_body = "<div>Folgende Bestellung ist eingegangen:</div>" .
			"<div style='height:15px;'></div>" .
			"<div>SOMMERMUSIK 1</div>" .
			"<div>Kategorie A: " . $concert_1_cat_a . "</div>" .
			"<div>Kategorie B: " . $concert_1_cat_b . "</div>" .
			"<div>Kategorie C: " . $concert_1_cat_c . "</div>" .
			"<div style='height:15px;'></div>" .
			"<div>SOMMERMUSIK 2</div>" .
			"<div>Kategorie A: " . $concert_2_cat_a . "</div>" .
			"<div>Kategorie B: " . $concert_2_cat_b . "</div>" .
			"<div>Kategorie C: " . $concert_2_cat_c . "</div>" .
			"<div style='height:15px;'></div>" .
			"<div>Ermäßigungen</div>" . $discountType .
			"<div style='height:15px;'></div>" .
			"<div>Mitgliedschaft: " . $is_member_message . "</div>" .
			"<div style='height:15px;'></div>" .
			"<div>Betrag: " . $contribution . "</div>" .
			"<div style='height:15px;'></div>" .
			"<div>Name: " . $name . "</div>" .
			"<div>Straße: " . $street . "</div>" .
			"<div>PLZ: " . $zip_code . "</div>" .
			"<div>Ort: " . $place . "</div>" .
			"<div>Land: " . $country . "</div>" .
			"<div>Telefon: " . $phone . "</div>" .

	$headers = "From: " . $sender . " \r\n" . "Reply-To:  " . $sender . " \r\n" . "X-Mailer: PHP/" . phpversion();
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=utf-8\r\n";
	if(mail("info@sommermusik.at", "Neue Bestellung/Mitgliedschaft", $email_body, $headers ) )
	{
		$senders_headers = "From: " . "info@sommermusik.at" . " \r\n" . "Reply-To:  " . "info@sommermusik.at" . " \r\n" . "X-Mailer: PHP/" . phpversion();
		$senders_headers .= "MIME-Version: 1.0\r\n";
		$senders_headers .= "Content-Type: text/html; charset=utf-8\r\n";
		$senders_email = "Lieber Musikfreund,<br><br>vielen Dank für Ihr Interesse an den OBERTÖNE-Kammermusiktagen! Ihre Nachricht wurde an uns verschickt, und Sie werden in Kürze Post von uns erhalten. Falls Sie noch Fragen haben, erreichen Sie uns unter info@sommermusik.at und 0681 8133 8493.<br><br>Mit besten Wünschen<br>Ihr Obertöne Team";
		mail($sender, "Ticketbestellung bzw. Mitgliedschaft", $senders_email, $senders_headers);
		echo "success";
	}
	else
	{
		echo "fail";
	}
?>
