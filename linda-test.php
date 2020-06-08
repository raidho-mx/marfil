<?php include('header.php'); ?>


<!-- Convert HEX to RGB -->
<?php
	// WP directions: Place function inside every single view
	// Credits: https://weblizar.com/convert-hex-code-to-rgb-code-php/
	function hex2rgb($hex) {
		$hex = str_replace("#", "", $hex);
		if(strlen($hex) == 3) {
			$r = hexdec(substr($hex,0,1).substr($hex,0,1));
			$g = hexdec(substr($hex,1,1).substr($hex,1,1));
			$b = hexdec(substr($hex,2,1).substr($hex,2,1));
		} else {
			$r = hexdec(substr($hex,0,2));
			$g = hexdec(substr($hex,2,2));
			$b = hexdec(substr($hex,4,2));
		}
		$rgb = array($r, $g, $b);
		return $rgb; // returns an array with the rgb values
	}
	$Hex_color = "#6A7346";
	$RGB_color = hex2rgb($Hex_color);
	$Final_Rgb_color = implode(", ", $RGB_color);
?>


<!-- The markup -->
<div class="has-btn inline-color-script fade-in-static-x1" style="background-color: rgb(<?php echo $Final_Rgb_color;  ?>)"><p>Inline dynamic color</p></div>


<?php include('footer.php'); ?>
