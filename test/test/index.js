/*

let age = window.prompt("How old are you?");

console.log(typeof age)
age = Number(age);
console.log(typeof age)
age += 1;

console.log("Happy birthday! You are " + age + " years old");
*/
/*
let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("pizza"); //if empty, its false, else its true

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
*/
/*
let userName = "Mos";
console.log(userName.length);
 console.log(userName.charAt(2));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
*/
/*
document.getElementById("myButton").onclick = function() {
    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");
    if(myCheckBox.checked == true) {
        console.log("You are SUBSCRIBED!");
    }
    else{
        console.log("Not Subscribed");
    }
    if (visaBtn.checked) {
        console.log("You are paying with visa");
    }
        else if (mastercardBtn.checked){
            console.log("You are paying with master card");
        }
            else if (paypalBtn.checked){
                console.log("You are paying with paypal");
            }
                else{
                    console.log("You have not selected any payment");
                }
            }
        */
/*
let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");

for(let i = 1; i <= 10; i+=1) {
    for(let j = 1; j <= 10; j+=1) {
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML +="<br>";
}
*/

for(let i = 1; i <=3; i+=1){
    
}