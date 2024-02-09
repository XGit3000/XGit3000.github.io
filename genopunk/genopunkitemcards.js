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

{/* <div class="CoolProductCard" style="background-color: #e0e0e0;">
            <div style="margin: 5px;">
                <img src="assets/images/syringe.png" style="width: 100%; align-self: center;">
                <p style="font-size: 2em; text-align: center;">STR GENO</p>
            </div>
        </div> */}