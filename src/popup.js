function generateString() {
    var id = "";
    var characters = "abcdefghijklmnopqrstuvwxyz" +
                     "0123456789";

    id += Math.floor(Math.random() * 10); //start with a number to improve success

    for (var i = 0; i < 5; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return id;
}

document.addEventListener('DOMContentLoaded', function() {
    var submitBnt = document.forms["main_form"]["submit"];
    var randomBnt = document.forms["main_form"]["random"];
    var rawText = document.forms["main_form"]["scrnshot"];

    //when random button is pressed
    randomBnt.addEventListener('click', function () {
        rawText.value = generateString(); //generate our ID
        rawText.style.color = "#000";     //change text colour to black
    });

    //when the text box is clicked on
    rawText.addEventListener('click', function() {
        if(rawText.value.length > 6) {
            rawText.value = "";           //empty the string
            rawText.style.color = "#000"; //change colour to black
        }
    });

    //when submit button is pressed
    submitBnt.addEventListener('click', function() {
        if(rawText.value.length > 0 && rawText.value.length == 6) { //check length for valid input
            //check current tab
            chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
                if(tabs[0].url.indexOf("prntscr") !=-1) //if the tab is already of prntscr, update it
                    chrome.tabs.update({url: "http://www.prntscr.com/" + rawText.value});
                else // else create a new one with the id
                    chrome.tabs.create({url: "http://www.prntscr.com/" + rawText.value});
            });

        } else {
            rawText.value = "ID needs to be 6 chars.";
            rawText.style.color = "#888";
        }
    });
});
