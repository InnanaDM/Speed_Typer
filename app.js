console.log("ready!");

msg = new Array ("The Earth is the third planet from the Sun.", "It rains diamonds on Neptune and Uranus.", "Venus is the brightest planet in our Solar System.", "Pluto's existence was not known to the ancient world.","Ancient Sumer is the first civilization recorded in history.", "The Sumerians were the first known beer drinking society.", "Ninkasi is the Sumerian goddess of beer.", "Inanna is the Sumerian goddess of Heaven and Earth.", "Sumerian aliens were called the Annunaki.", "The Annunaki came to Earth to mine gold.", "Sumer is also known as 'land of the civilized kings'.")

word = 10;

function s() {

    console.log("Ready!");
    msg = new Array("The Earth is the third planet from the Sun.", "It rains diamonds on Neptune and Uranus.", "Venus is the brightest planet in our Solar System.", "Pluto's existence was not known to the ancient world.")

    word = 10; 
}

function m() {

    console.log("Ready!");
    
    msg = new Array ("Ancient Sumer is the first civilization recorded in history.", "The Sumerians were the first known beer drinking society.", "Ninkasi is the Sumerian goddess of beer.", "Inanna is the Sumerian goddess of Heaven and Earth.")

    word = 14;
}

function e() {
    console.log("Ready!");

    msg = new Array ("Inanna is the Sumerian goddess of Heaven and Earth.", "Sumerian aliens were called the Annunaki.", "The Annunaki came to Earth to mine gold.", "Sumer is also known as 'land of the civilized kings'.")
}


var start = function() {
    randNum = Math.floor((Math.random() * 10)) % 4;

    msgType = msg[randNum];

    day = new Date();

    startType = day.getTime();

    document.typeForm.given.value = msgType

    document.typeForm.typed.focus();

    document.typeForm.typed.select();

}


// ?COME UP WITH STOP LOGIC!
var stop() {

    console.log("Ready!!");

    dayTwo = new Date();
    endType = dayTwo.getTime();

// !rand num, if else...

totalTime = ((endType - startType) / 1000)
spd = Math.round((word/totalTime) * 60)
if (document.theForm.typed.value == document.theForm.given.value) {
alert("\nYou typed a " + word + " word sentence in "
+ totalTime + " seconds, a speed of about " + spd + " words per minute!")
}

// *else logic understood, now if.............. >_<
else {

    console.log("READY!");

    alert("You messed up, but typed at a speed of " + spd + " words per minute... Not good enough.")
       }




}





// "'I am' is the shortest complete sentence in the English language