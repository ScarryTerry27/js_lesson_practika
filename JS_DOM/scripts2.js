let parent = document.getElementById("one");
let child = document.createElement("select");
let child1 = document.getElementById("btn");
parent.addEventListener("change", (event) => {
  let str =
    '<option value="15">Offline</option><option value="16">Online</option>';
  child.innerHTML = str;
  child.setAttribute("name", "logo");
  parent.append(child);
  parent.append(child1);
});
