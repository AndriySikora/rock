window.onload = initPage;

function initPage() {
	thumbs = document.getElementById("thumbnailPane").getElementsByTagName("img");
	for (var i = 0; i < thumbs.length; i++){
		var image = thumbs[i];
		image.onclick = function() {
			detailURL = 'images/'+this.title+'-detail.jpg';
			document.getElementById('itemDetail').src = detailURL;
			getDetails(this.title);
		}
	}
}

function getDetails (itemName) {
	request = createRequest();
	if(request == null){
		 alert("Unable to create request");
		return;
	}
	var url= "rock?title="+ escape(itemName); //create object
	request.open('GET', url, true);
	request.onreadystatechange = displayDetails;
	request.send(null);
}

 function displayDetails() {
 	if(request.readyState == 4){
 		if(request.status == 200){
 			detailDiv = document.getElementById("description");
			var p = document.createElement('p');
			p.innerHTML = request.responseText;
			detailDiv.innerHTML = '';
			detailDiv.appendChild(p);
 		}
 	}
 }

