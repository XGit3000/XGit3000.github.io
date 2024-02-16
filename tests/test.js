const addButton = document.querySelector("button");
const list = document.querySelector("ul");
const li = document.querySelector("li");

addButton.addEventListener("click", () => {
  console.log(";SALDIJHFGL;KDFHJSAUGL;KFJHDSAL;KSDAHFJKJ");
  const liCopy = li.cloneNode(true);
  list.appendChild(liCopy);
});