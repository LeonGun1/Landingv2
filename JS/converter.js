let valueToConvert = 0;

let cmHtml = document.getElementById("centimeter");
let mHtml = document.getElementById("meter");
let kmHtml = document.getElementById("kilometer");
let inchHtml = document.getElementById("inch");
let feetHtml = document.getElementById("feet");
let milesHtml = document.getElementById("miles");
console.log(cmHtml);

// ulike verdier med utgangspunkt i 1 centimeter
let centimeter = 1
let meter = 100
let kilometer =  100000
let inch = 2.54
let feet = 30.48
let miles = 160934

// nye variabler for å "lagre" input fra tekst-feltene
let cmNew
let mNew
let kmNew
let inchNew
let feetNew
let milesNew

// eventlistener for å sjekke når det blir gjort endringer i input-feltet
cmHtml.addEventListener("input", (event)=>inputTyping(event))
mHtml.addEventListener("input", (event)=>inputTyping(event))
kmHtml.addEventListener("input", (event)=>inputTyping(event))
inchHtml.addEventListener("input", (event)=>inputTyping(event))
feetHtml.addEventListener("input", (event)=>inputTyping(event))
milesHtml.addEventListener("input", (event)=>inputTyping(event))

function inputTyping(event){
    console.log("you're typing!")
const id = event.target.id;
console.log(id)


switch(id){
    case "centimeter":
        valueToConvert = cmHtml.value * centimeter
        console.log(valueToConvert)
        
        break;
    case "meter":
        valueToConvert = mHtml.value * meter
        break;
    case "kilometer":
        valueToConvert = kmHtml.value * kilometer
        break;
    case "inch":
        valueToConvert = inchHtml.value * inch
        break;
    case "feet":
        valueToConvert = feetHtml.value * feet
        break;
    case "miles":
        valueToConvert = milesHtml.value * miles
        break;
    default:
            console.log("Errors has been makign")
}
cmNew = valueToConvert/centimeter
cmHtml.value = Math.round(cmNew * 1000) / 1000;

mNew = valueToConvert/meter
mHtml.value = Math.round(mNew * 1000) / 1000;

kmNew = valueToConvert/kilometer
kmHtml.value = Math.round(kmNew * 100000) / 100000;

inchNew = valueToConvert/inch
inchHtml.value = Math.round(inchNew * 1000) / 1000;

feetNew = valueToConvert/feet
feetHtml.value = Math.round(feetNew * 1000) / 1000;

milesNew = valueToConvert/miles
milesHtml.value = Math.round(milesNew * 100000) / 100000;

valueToConvert = 0

}