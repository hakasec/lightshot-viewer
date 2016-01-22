//make substring of URL from index 19 onwards
var id = document.URL.substring(19);

//characters for new ID
var characters = "abcdefghijklmnopqrstuvwxyz" +
                 "0123456789";

//custom elements for the page
var controls = document.createElement("DIV");
var nextBtn = document.createElement("BUTTON");
var prevBtn = document.createElement("BUTTON");
var screenshot = document.getElementsByClassName("image-constrain js-image-wrap")[0];
var image = document.getElementById("screenshot-image");

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
    /*id = id.substring(0, 5) + characters.charAt(
        characters.indexOf(id.charAt(5))+1);*/
    id = incrementID(id);

    window.location.href = id;
});

//when prev button is pressed
prevBtn.addEventListener('click', function() {
  id = decrementID(id);
  window.location.href = id;
});

function incrementID(id) {
    if (id.charAt(5).indexOf('9') !=-1) {
        id = id.substring(0, 5) + 'a';
        console.log(id);
    } else {
        id = id.substring(0, 5) + characters.charAt(
            characters.indexOf(id.charAt(5))+1);
        console.log(id);
    }

    return id;
}

function decrementID(id) {
    if (id.charAt(5).indexOf('a') !=-1) {
        id = id.substring(0, 5) + '9';
        console.log(id);
    } else {
        id = id.substring(0, 5) + characters.charAt(
            characters.indexOf(id.charAt(5))-1);
        console.log(id);
    }

    return id;
}
