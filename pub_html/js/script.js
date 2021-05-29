var input = document.querySelector('input[type=file]'); // see Example 4
var productnum=0;


function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
}

document.onkeypress = function(){
  if (productnum==0){
  	$.ajax({
	    method: 'post',
	    url: 'load',
	    data: '',
	    success: load
	  });
  } else if (productnum==1){
  	$.ajax({
	    method: 'post',
	    url: 'load',
	    data: '',
	    success: load2
	  });
  }
  productnum++;
};

// $(document).ready(function(){
// // input.onchange = function () {
//   var file = input.files[0];
//   if (productnum==0){
//   	$.ajax({
// 	    method: 'post',
// 	    url: 'load',
// 	    data: '',
// 	    success: load
// 	  });
//   } else if (productnum==1){
//   	$.ajax({
// 	    method: 'post',
// 	    url: 'load',
// 	    data: '',
// 	    success: load2
// 	  });
//   }
//   productnum++;
//   // drawOnCanvas(file);   // see Example 6
//   // displayAsImage(file); // see Example 7
// // };
// });

input.onchange = function () {
  var file = input.files[0];

  if (productnum==0){
  	$.ajax({
	    method: 'post',
	    url: 'load',
	    data: '',
	    success: load
	  });
  } else if (productnum==1){
  	$.ajax({
	    method: 'post',
	    url: 'load',
	    data: '',
	    success: load2
	  });
  }
  productnum++;
  if(productnum==2){
  	productnum=0;
  }
  // drawOnCanvas(file);   // see Example 6
  // displayAsImage(file); // see Example 7
};

var lastcard = $('#cards');

function load2(data){
	$('.itemCard').after(data);
	// lastcard = lastcard.next();
	// console.log(lastcard);
	// console.log(data);
	setTimeout(function(){
		$.ajax({
		    method: 'post',
		    url: 'product',
		    data: '',
		    success: display2
	  	});
	}, 900);
}

function load(data){
	lastcard.after(data);
	lastcard = lastcard.next();
	console.log(lastcard);
	// console.log(data);
	setTimeout(function(){
		$.ajax({
		    method: 'post',
		    url: 'product',
		    data: '',
		    success: display
	  	});
	}, 900);
}

function display2(data){
	$('.loader').after(data);
	$('.loader').remove();
	$(".itemCard2").fadeTo(125, 1, function(){});
}

function display(data){
	lastcard.after(data);
	$('.loader').remove();
	$(".itemCard").fadeTo(125, 1, function(){});
	$('#helptext').text("Press Checkout to pay and go, or hit Scan to continue shopping!");
}

// function drawOnCanvas(file) {
//   var reader = new FileReader();

//   reader.onload = function (e) {
//     var dataURL = e.target.result,
//         c = document.querySelector('canvas'), // see Example 4
//         ctx = c.getContext('2d'),
//         img = new Image();

//     img.onload = function() {
//       c.width = img.width;
//       c.height = img.height;
//       ctx.drawImage(img, 0, 0);
//     };

//     img.src = dataURL;
//   };

//   reader.readAsDataURL(file);
// }

// function displayAsImage(file) {
//   var imgURL = URL.createObjectURL(file),
//       img = document.createElement('img');

//   img.onload = function() {
//     URL.revokeObjectURL(imgURL);
//   };

//   img.src = imgURL;
//   document.body.appendChild(img);
// }
window.scrollTo(0, 1); 