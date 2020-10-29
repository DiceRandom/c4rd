console.log("Loaded");

var url = window.location.href;
var data = JSON.parse(url.split("#")[1].replace(/%22/g,'"').replace(/%20/g,' '));
console.log(data);

var name = data.name;
document.getElementById("name").innerHTML = name;


function createExample(){
	window.location.href = '#{"name":"John","age":30,"city":"New York"}';
	var url = window.location.href;
	var data = JSON.parse(url.split("#")[1].replace(/%22/g,'"').replace(/%20/g,' '));
}