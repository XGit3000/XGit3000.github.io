function generateCard(card_title, card_color, target_div){
    // return "testlol"
    var R = parseInt(card_color.substr(1,2), 16); // Grab the hex representation of red (chars 1-2) and convert to decimal (base 10).
    var G = parseInt(card_color.substr(3,2), 16);
    var B = parseInt(card_color.substr(5,2), 16);
    var hue = Math.atan2(Math.sqrt(3) * (G - B), 2 * R - G - B);
    var new_div_start = `
    <div class="CoolProductCard" style="background-color: #e0e0e0; margin: 30px 10px">
        <div style="margin: 5px;">
            <img src="assets/images/syringe.png" style="width: 100%; align-self: center; filter: hue-rotate(${hue*180.0/3.141592654}deg)">
            <p style="font-size: 2em; text-align: center;">${card_title}</p>
        </div>
    </div>`;
    return new_div_start;
}

function initializeCoolProductCardEffects(){
    let product_cards = document.getElementsByClassName('CoolProductCard');
    for(let i = 0; i < product_cards.length; i++){
        let product_card = product_cards[i];
        product_card.innerHTML += '\n<div class="CoolEffectsContainer"></div>'
        let effects_container = product_card.getElementsByClassName("CoolEffectsContainer")[0];
        effects_container.addEventListener("mouseover", function(){productCardHoverEffect(effects_container)});
    }
}
let count = 0;
function productCardHoverEffect(effect_container){
    console.log("HOBER");
    console.log(effect_container);
    let id_string = `CoolSwipeEffectInstance${count}`
    // effect_container.innerHTML += `<div class="CoolSwipeEffect" style="background-color:#FFFF00;" id="${id_string}"></div>`;
    let new_div = document.createElement("div");
    new_div.classList.add("CoolSwipeEffect");
    new_div.style.backgroundColor = "#FFFF00";
    // new_div.style.height = "10%";
    new_div.id = `${id_string}`;
    effect_container.appendChild(new_div);
    
    // let swipe_effect = effect_container.getElementsByClassName("CoolSwipeEffect")[-1];
    // let swipe_effect = effect_container.lastChild
    let swipe_effect = document.getElementById(id_string);
    swipe_effect.addEventListener("animationend", function(){removeEffect(effect_container, swipe_effect)});
    // requestAnimationFrame(function(){swipe_effect.addEventListener("animationend", removeEffect);})
    
    // swipe_effect.setAttribute("style","background-color:#FFFF00; height:100%");
    // swipe_effect.classList.add("CoolSwipeEffect");
    // swipe_effect.animate([{height: '100%'},{height: '0%'}],{duration:1000, fill:'forwards'});
    // swipe_effect.animate([
    //     {bottom: '-50%', top: "0%"},
    //     // {height: '100%'},
    //     // {height: '100%', top: "150%"},
    //     {bottom: '0%', top: "100%"}
    // ], {
    //     duration: 1000*6.0/60.0,
    //     // fill: 'forwards'
    // });
    console.log(swipe_effect);
    // console.log("end of func ig lol");
    count += 1;
    // console.log(count);
}

function removeEffect(effect_container, effect_instance){
    // console.log("EFFECT ENDED");
    // console.log(effect_container);
    // console.log(effect_instance);
    // console.log("effect ended ended");
    effect_container.removeChild(effect_instance);
    // console.log(string_thing);
}

{/* <div class="CoolProductCard" style="background-color: #e0e0e0;">
            <div style="margin: 5px;">
                <img src="assets/images/syringe.png" style="width: 100%; align-self: center;">
                <p style="font-size: 2em; text-align: center;">STR GENO</p>
            </div>
        </div> */}