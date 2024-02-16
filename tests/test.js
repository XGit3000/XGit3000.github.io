const addButton = document.querySelector("button");
const list = document.querySelector("ul");
const li = document.querySelector("li");

addButton.addEventListener("click", () => {
  console.log(";SALDIJHFGL;KDFHJSAUGL;KFJHDSAL;KSDAHFJKJ");
  // const liCopy = li.cloneNode(true);
  // list.appendChild(liCopy);
  // list.innerHTML += '<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis perspiciatis dignissimos, et dolores pariatur.</li>'
  let new_div = document.createElement("div");
  new_div.classList.add("li");
  new_div.innerHTML = "lol text";
  // new_div.
  // new_div.classList.add("li");
  list.appendChild(new_div);
  });