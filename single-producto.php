<?php
	include('header.php');
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

<!-- HERO IMAGE -->
<section class="bg-gray bg-img" style="background-image: url('img/13.jpg');">
	<div class="mask-gradient-dark-gray"></div>
	<div class="container">
		<div class="row">
			<div class="col-12 vh100 pb-100 d-flex align-items-md-end align-items-center" id="heroImg">
				<div class="col-9 w-100 fade-in show delay4 text-md-left text-center">
					<h1 class="txt100 c-white is-bold text-uppercase">Silla Guaymas Lounge</h1>
				</div>
				<div class="col-3 d-flex w-100 fade-in show delay4 text-md-left text-center">
					<a href="" class="has-btn inline-color-script ml-auto" style="background-color: rgb(<?php echo $Final_Rgb_color;  ?>)">VER GALERÍA</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- BLOQUE: TXT / IMG -->
<section class="bg-light-gray pt-md-5 pt-3">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<h2 class="txt36"><strong>Inspiradas en las hermosas playas del pueblo mexicano</strong></h2>
				<p>Guaymas es una colección de mobiliario para exteriores diseñada por Christian Vivanco para Los Patrones, inspirada en las hermosas playas del pueblo mexicano del mismo nombre, localizado frente al Mar de Cortés. </p>
			</div>
			<div class="col-md-6">
				<img src="img/13.jpg" alt="">
			</div>
		</div>
	</div>
</section>

<!-- BLOQUE: IMG / TXT -->
<section class="bg-light-gray pt-md-5 pt-3">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<img src="img/13.jpg" alt="">
			</div>
			<div class="col-md-6">
				<h2 class="txt36"><strong>Inspiradas en las hermosas playas del pueblo mexicano</strong></h2>
				<p>Guaymas es una colección de mobiliario para exteriores diseñada por Christian Vivanco para Los Patrones, inspirada en las hermosas playas del pueblo mexicano del mismo nombre, localizado frente al Mar de Cortés. </p>
			</div>
		</div>
	</div>
</section>

<!-- BLOQUE: IMG/ IMG -->
<section class="bg-light-gray pt-md-5 pt-3">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<img src="img/13.jpg" alt="">
			</div>
			<div class="col-md-6">
				<img src="img/13.jpg" alt="">
			</div>
		</div>
	</div>
</section>

<!-- BLOQUE: IMG -->
<section class="bg-light-gray pt-md-5 pt-3">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<img src="img/13.jpg" alt="">
			</div>
		</div>
	</div>
</section>

<!-- BLOQUE: 3D MODEL BLOCK -->
<section class="bg-light-gray pt-md-5 pt-3 pb-md-5 pb-3">
	<div class="container">
		<div class="bg-white p-md-5 p-3">
			<div class="row">
				<div class="col-md-6">
					<img src="img/producto-verde1.png" alt="">
				</div>
				<div class="col-md-6">
					<img src="img/icon-3d.svg" alt="">
					<p class="txt36 c-dark-gray"><strong>MODELO 3D</p></strong>
					<a href="#" class="has-btn inline-color-script" style="background-color: rgb(<?php echo $Final_Rgb_color; ?>); ">DESCARGAR</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- BLOQUE: TECHNICAL SPECIFICATIONS -->
<section class="inline-color-script p-md-5 p-3" style="background-color: rgb(<?php echo $Final_Rgb_color; ?>);">
	<div class="container">
		<div class="row">
			<div class="col-12 mb-md-5 mb-3">
				<h2 class="c-white text-uppercase txt36"><strong>Especificaciones<br> técnicas</strong></h2>
			</div>
			<div class="col-md-3">
				<img src="img/producto-verde1.png" alt="">
			</div>
			<div class="col-md-3">
				<p class="c-dark-gray mb-3"><strong>MODELO LOUNGE</strong></p>
				<p class="c-white mb-3"><strong>Ancho x largo x alto 78 x 83 x 81 cm</strong></p>
				<p class="c-white mb-3"><strong>Altura al asiento 40 cm</strong></p>
			</div>
			<div class="col-md-3">
				<p class="c-dark-gray mb-3"><strong>VARIANTES</strong></p>
				<ul class="has-list-checkmark">
					<li><p class="c-white mb-3"><strong>Interior</strong></p></li>
					<li><p class="c-white mb-3"><strong>Exterior</strong></p></li>
					<li><p class="c-white mb-3"><strong>Cojín suelto</strong></p></li>
				</ul>
			</div>
		</div>
	</div>
</section>



<?php include('footer.php'); ?>
