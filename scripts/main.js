var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/rugbyRules.jpg') {
        myImage.setAttribute('src', 'images/rugbyRules2.jpg');
    } else {
        myImage.setAttribute('src', 'images/rugbyRules.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Rugby Rules are cool! ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Rugby Rules are cool ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}