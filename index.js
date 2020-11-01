console.log("Loaded");

var url = window.location.href;
var data = JSON.parse(url.split("#")[1].replace(/%22/g,'"').replace(/%20/g,' '));
console.log(data);

document.getElementById("name").innerHTML = data.name;
document.getElementsByClassName("profile-image")[0].src = data.profileURL;
document.getElementsByClassName("link")[0].onclick = function() { location.href= data.link1.link1URL;}; 
document.getElementsByClassName("link")[0].children[1].innerHTML = data.link1.link1Title;
document.getElementsByClassName("link")[0].children[0].src = data.link1.link1Pic;

// URL document.getElementsByClassName("link")[0].onclick = function() { location.href='https://www.twitch.tv/randicer'; };



function createExample(){
	window.location.href = '#{"name":"John","age":30,"city":"New York"}';
	var url = window.location.href;
	var data = JSON.parse(url.split("#")[1].replace(/%22/g,'"').replace(/%20/g,' '));
}