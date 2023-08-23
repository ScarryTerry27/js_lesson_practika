let body = document.body;
let elem = document.createElement("div");
let style_text =
  "border: 1px solid green; padding: 10px 20px; border-radius: 10px; font-size: 16px; width: 200px; height: auto; margin: 100px auto; text-align:center;";
elem.style.cssText = style_text;
body.prepend(elem);
let flag = false;
let div = document.getElementById("one");
let child = document.createElement("p");
let child1 = document.createElement("p");
let sec = 0;
let minutes = 0;
let hour = 0;
let str = "";
addTime();

function addTime() {
  let str = `${formatSTR(hour)}:${formatSTR(minutes)}:${formatSTR(sec)}`;
  console.log(str);
  child.innerHTML = str;
  child1.innerHTML = str;
  div.prepend(child);
  elem.append(child1);
}

function formatSTR(num) {
  if (String(num).length == 1) {
    return "0" + num;
  } else {
    return num;
  }
}

let idMove = setInterval(function () {
  if (!flag) {
    return false;
  }
  sec++;
  if (sec === 60) {
    minutes++;
    sec = 0;
  }
  if (minutes === 60) {
    minutes = 0;
    hour++;
  }
  if (hour === 24) {
    hour = 0;
  }
  addTime();
}, 1000);

let bt1 = document.getElementById("btn1");
let bt2 = document.getElementById("btn2");
let bt3 = document.getElementById("btn3");

bt1.addEventListener("click", () => {
  flag = true;
});

bt2.addEventListener("click", () => {
  flag = false;
});

bt3.addEventListener("click", () => {
  flag = false;
  sec = 0;
  minutes = 0;
  hour = 0;
  addTime();
});
