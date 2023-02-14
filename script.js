/* Declare variables below to save the different sections (divs) of your story*/

let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");
let screen1 = document.querySelector(".option-one-screen");
let screen2 = document.querySelector(".option-two-screen");
let Endscreen1 = document.querySelector(".option-one-end");
let Endscreen2 = document.querySelector(".option-two-end");
let next1 = document.querySelector(".next1");
let next2= document.querySelector(".next2");


button1.onclick = function() {
    screen1.style.display = "block";
};
next1.onclick = function() {
    Endscreen1.style.display = "block";
};

button2.onclick = function() {
    screen2.style.display ="block";
};
next2.onclick = function() {
Endscreen2.style.display ="block";
};





/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/