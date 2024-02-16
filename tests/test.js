count = 0;
function doCoolEffect(){
  console.log("DOING EFFEDFSAFDF;LKAJSDGJHGALK;JHLAKSJDFHLKAJSHFDLKJASHGLKASJHF WHYDYYD");
  // let container = document.getElementsByClassName("TestContainer")[0];
  let id_string = `testEffectInstance${count}`;
  this.innerHTML += `<div class="test-effect" id="${id_string}"></div>`;
  count += 1;
}

function startThing(){
  let stuff = document.getElementsByClassName("TestContainer")[0];
  stuff.addEventListener("mouseover", doCoolEffect)
}