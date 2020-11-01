
var debug = false;
		   
function generateJSON(){
	var uid = document.getElementById("uid").value;
	var uidPic = document.getElementById("uidPicture").value;
	var link1URL = document.getElementById("link1url").value;
	var link1Pic = document.getElementById("link1pic").value;
	var link1Title = document.getElementById("link1title").value;
	

	var result = '{"name" : "'+uid+'", "profileURL" : "'+uidPic+'","link1":{"link1URL" : "'+link1URL+'","link1Pic":"'+link1Pic+'","link1Title":"'+link1Title+'"}}';
	var resultJSON = JSON.parse(result);

	if(debug == true){
		console.log(resultJSON);
	}else{
		window.location.href = './index.html#'+result;
	}
}

function toggleDebug(){
	debug = !debug;
	
	if(debug){
		console.log('%c Debug Enabled', 'font-weight: bold; font-size: 25px;color: red;');
	}else{		
		console.log('%c Debug Disabled', 'font-weight: bold; font-size: 25px;color: red;');
	}

}