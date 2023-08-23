let inputs = document.querySelectorAll("input");
console.log(inputs);
const inputsArray = Array.from(inputs);
for (const input of inputsArray) {
  console.log(input);
}

// let name = document.querySelector('[data-js="qs"]');
// console.log(name);
// setTimeout(() => {
//   alert("Hello!");
// }, 1000);
// let qs = document.querySelector('name="email"');
document.onmousemove = function (e) {
  mc1.innerHTML = e.pageX;
  mc2.innerHTML = e.pageY;
};
document.onmousedown = function () {
  mc1.style.fontSize = mc2.style.fontSize = "x-large";
};
document.onmouseup = function () {
  mc1.style.fontSize = ms2.style.fontSize = "medium";
};

// qs.addEventListener("contextmenu", (e) => {
//   alert("Hello");
// });

// setTimeout()
// setInterval()

// addEventListener()
// removeEventListener()
// click
// contextmenu
// mouseover / mouseout
// mousedown / mouseup
// mousemove
// submit
// focus
// keydown / keyup
// DOMContentLoaded
// transitionend

// style

// getElementById()
// getElementsByName()
// getElementsByClassName()
// getElementsByTagName()
// hasChildNodes()

// nextSibling
// previousSibling

// firstChild
// lastChild

// appendChild()
// cloneNode()
// removeChild()
// createElement()
// innerText
// innerHTML
// insertBefore()

let newEl = document.createElement("span");
newEl.innerText = "Some text";
let child = document.getElementById("childElement");
let parentDiv = child.parentNode;
parentDiv.insertBefore(newEl, child);

let qs = document.querySelector("[data-js='qs']");
qs.addEventListener("click", () => {
  alert("Hello");
});

qs.style.border = "5px yellow solid";
let form = document.getElementById("form");
console.log(form);
// innerHeight
// innerWidth
// outerHeight
// outerWidth

// screenLeft
// screenX
// screenTop
// screenY
// scrollX
// scrollY

// open()
// open(addr,id,attr)
// stop()
// close()
// moveTo(X,Y)
// moveBy(dX,dY)
// resizeTo(W,H)
// resizeBy(dW,dH)

/////////////// Navigator

// appCodeName
// battery
// getBattery()
// connection
// cookieEnabled
// geolocation
// language
// languages
// onLine
// platform
// product
// userAgent
// getUserMedia()
// vibrate()

/////////////// Location

// hash якорь
// host
// hostname
// href
// pathname
// port
// protocol
// search
// assign(addr)
// reload()
// replace(addr)
