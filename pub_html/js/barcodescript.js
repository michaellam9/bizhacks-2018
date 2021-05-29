setTimeout(function () {
	$(".loader").fadeTo(125,0,function(){
		$(".loader").remove();
		$(".barcodeContainer").fadeTo(75, 1, function(){
		// animation
	});
	})
}, 1500);