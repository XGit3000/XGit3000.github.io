function fillMenu(titletext,itemtexts,targetdiv,titleclassname,itemclassname,selected){
    let newdivstart = `<div class="${titleclassname}"><p>${titletext}</p>`;
    let newmenuitemsdiv = "";
    for(let i = 0; i<itemtexts.length; i++){
        newmenuitemsdiv += `<a class="${itemclassname}">${itemtexts[i]}<a>`
    }

    let newdiv = newdivstart + newmenuitemsdiv + `</div>`
    console.log(document.getElementById(targetdiv))
    document.getElementById(targetdiv).innerHTML = newdiv
    
}