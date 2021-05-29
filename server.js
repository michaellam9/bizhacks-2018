var express = require('express');
var app = express();
var http = require('http');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

var port = process.env.PORT || 16758;

app.use(express.json());
app.use(express.urlencoded( { extended:false} ));

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm','html'],
  index: "home.html"
}

app.use('/', function(req,res,next){
  console.log(req.method, 'request:', req.url, JSON.stringify(req.body));
  next();
});

app.use('/', express.static('./pub_html', options));

app.post('/load', function(req,res,next){
	var htmltext = `<div class="loader"></div>`
	res.send(htmltext);
});

var productnum=0;
app.post('/product', function(req,res,next){
var htmltext;
if(productnum==0){
 htmltext = `<div class="itemCard" id="wow">
    <img src="./img/earpuds.png" alt="product" height="100" width="100">
    <div class="description">
        <h6>   Sound Isolating Earbuds w/Remote - Black </h6>
        <p> $44.99 </p>
    </div>
</div>`;
} else if (productnum==1){
	htmltext = `<div class="itemCard2" id="wow2">
    <img src="./img/sunglass.jpg" alt="product" height="90" width="90">
    <div id="product2" class="description">
        <h6>   Rayban Original Wayfarer Sunglasses </h6>
        <p> $49.99 </p>
    </div>
</div>`;
}
productnum++;
if(productnum==2){
	productnum=0;
}
	res.send(htmltext);
});


http.createServer(app).listen(port);
console.log('running on port',port);
