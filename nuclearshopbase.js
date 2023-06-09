function fillMenu(titletext,itemtexts,targetdiv,titleclassname,itemclassname,menuclassname,selected){
    let newdivstart = `<button class="${titleclassname}"><p class="ButtonTitleText">${titletext}</p>`;
    let newmenuitemsdiv = "";
    for(let i = 0; i<itemtexts.length; i++){
        newmenuitemsdiv += `<label class="ItemText"><input type="radio" name=${titletext} value=${itemtexts[i]} onclick="saveRadioOption('${titletext}')"/>${itemtexts[i]}</label>`
        // newmenuitemsdiv += `<input  type="radio" id="${itemtexts[i]}" name="${titletext}" value="${itemtexts[i]}"><label for="${itemtexts[i]}" class="ItemText">${itemtexts[i]}</label><br>`
        // newmenuitemsdiv += `<button class="${itemclassname}"><p class="ItemText">${itemtexts[i]}</p></button>`
    }

    // let newdiv = newdivstart + newmenuitemsdiv + `</button>`
    let newdiv = newdivstart + `</button>`+`<div class=${menuclassname}>`+newmenuitemsdiv+`</div>`;
    console.log(document.getElementById(targetdiv));
    document.getElementById(targetdiv).innerHTML = newdiv;
}

function initializeCollapsableMenus(){
    let collapsable = document.getElementsByClassName('MainDropdownTitle');
        console.log("yeah");
        console.log(collapsable)
        for(let i = 0; i < collapsable.length;i++){
            console.log(collapsable[i])
            collapsable[i].addEventListener("click", function(){
                this.classList.toggle("active");
                console.log(this)
                let content = this.nextElementSibling;
                // if(content.style.display === "block"){
                //     content.style.display = "none";
                // }
                // else{
                //     content.style.display = "block"
                // }
                if (content.style.maxHeight){
                    content.style.maxHeight = null;
                  } else {
                    content.style.maxHeight = content.scrollHeight + "px";}
            })
        }
}

function saveRadioOption(name){
    let radios = document.getElementsByName(name);
    for(let i = 0; i<radios.length; i++){
        if (radios[i].checked){
            localStorage.setItem(name, radios[i].value)
            console.log("Saving "+name + " " +radios[i].value)
            return radios[i].value
        }
    }
}