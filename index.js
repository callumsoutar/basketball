let homeScore = 0
let guestScore = 0

let homePoints = document.getElementById('home-el')

let guestPoints = document.getElementById('guest-el')

function homeIncrement1() {
    homeScore = homeScore +=1;
    homePoints.innerText = homeScore
}

function homeIncrement2() {
    homeScore = homeScore +=2;
    homePoints.innerText = homeScore
}

function homeIncrement3() {
    homeScore = homeScore +=3;
    homePoints.innerText = homeScore
}




function guestIncrement1() {
    guestScore = guestScore +=1;
    guestPoints.innerText = guestScore;
}

function guestIncrement2() {
    guestScore = guestScore +=2;
    guestPoints.innerText = guestScore;
}

function guestIncrement3() {
    guestScore = guestScore +=3;
    guestPoints.innerText = guestScore;
}