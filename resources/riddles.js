const obj = JSON.parse("riddles.json");

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("trash");
var captionText = document.getElementById("inside_trash");
img.onclick = function(){
  modal.style.display = "block";
  fetch("riddles.json")
	.then(function(response) {
		return response.json();
	})
	.then(function(riddles) {
		if (document.getElementById("inside_trash") {
  			captionText.innerHTML = this.(riddles[0].question);
		}
		else if (document.getElementById("view_monitor") {
			document.getElementById("view_monitor").innerHTML = this.(riddles[1].question);
		}
		else if (document.getElementById("read_paper") {
			document.getElementById("read_paper").innerHTML = this.(riddles[2].question);
		}
		else if (document.getElementById("take_robot") {
			document.getElementById("take_robot").innerHTML = this.(riddles[3].question);
		}
		else if (document.getElementById("final_1") {
			document.getElementById("final_1").innerHTML = this.(riddles[3].question);
		}	
	} )
	.catch(function (err) {
		console.log(err);
	});
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


