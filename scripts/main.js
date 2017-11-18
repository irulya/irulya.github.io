// JavaScript source code
var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    var sName1 = 'images/firefox-icon.png';
    var sName2 = 'images/Philippino jewellery designer.jpg';

    if (mySrc === sName1) {
        myImage.setAttribute('src', sName2);
    } else if (mySrc === sName2){
        myImage.setAttribute('src', sName1);
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}