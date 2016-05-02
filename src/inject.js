//make substring of URL from index of the last slash onwards
var id = document.URL.substring(document.URL.lastIndexOf("/") + 1);

//custom elements for the page
var controls = document.createElement("DIV");
var nextBtn = document.createElement("BUTTON");
var prevBtn = document.createElement("BUTTON");
var screenshot = document.getElementsByClassName("image-constrain js-image-wrap")[0];
var image = document.getElementById("screenshot-image");

//if the screenshot's src is the removed.png image then generate a new id
if (image.src === "http://i.imgur.com/8tdUI8N.png")
	window.location.href = generateString();


//styling and appending
controls.id = "controls";
controls.style.marginBottom = "-10px";

nextBtn.appendChild(document.createTextNode("Next"));
prevBtn.appendChild(document.createTextNode("Previous"));
prevBtn.style.marginLeft = "10px";

controls.appendChild(nextBtn);
controls.appendChild(prevBtn);

screenshot.insertBefore(controls, image);

//button event listeners
//when next button is pressed
nextBtn.addEventListener('click', function() {
    id = incrementID(id);
    window.location.href = id;
});

//when prev button is pressed
prevBtn.addEventListener('click', function() {
    id = decrementID(id);
    window.location.href = id;
});

//copy of the popup.js generateString function
function generateString() {
    var id = "";
    var characters = "abcdefghijklmnopqrstuvwxyz" +
                     "0123456789";

    for (var i = 0; i < 6; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return id;
}

function incrementID(id) {
	var numId = parseInt(id, 36) + 1 //convert base36 id to number and add 1
	
    return numId.toString(36);	//convert back to base36 id
}

function decrementID(id) {
	var numId = parseInt(id, 36) - 1 //convert base36 id to number and subtract 1

    return numId.toString(36);	//convert back to base36 id
}
