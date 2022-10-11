function onChangeValue() {
    let pagine = parseInt(document.getElementById("html_pagine").value)
    let carta = document.getElementById("html_carta").value
    let rilegatura = document.getElementById("html_rilegatura").value
    calculate(pagine, carta, rilegatura)
}

function calculate(pagine, carta, rilegatura) {
    let dorso = 0
    const spessori = [
        { carta: 'uso-mano-avorio-80g',   fresata: 98,  cucita: 108 },
        { carta: 'uso-mano-avorio-100g',  fresata: 122, cucita: 140 },
        { carta: 'uso-mano-avorio-120g',  fresata: 137, cucita: 160 },
        { carta: 'uso-mano-bianca-80g',   fresata: 94,  cucita: 107 },
        { carta: 'uso-mano-bianca-90g',   fresata: 111, cucita: 127 },
        { carta: 'uso-mano-bianca-100g',  fresata: 125, cucita: 140 },
        { carta: 'uso-mano-bianca-120g',  fresata: 150, cucita: 165 },
        { carta: 'freelife-bianca-100g',  fresata: 112, cucita: 122 },
        { carta: 'lux-cream-avorio-80g',  fresata: 140, cucita: 155 },
        { carta: 'uso-mano-spessorata-avorio-100g', fresata: 157, cucita: 174 },
        { carta: 'tintoretto-avorio-95g', fresata: 117, cucita: 140 },
        { carta: 'tintoretto-bianca-95g', fresata: 117, cucita: 140 },
    ]

    let fresata = 0
    let cucita = 0

    spessori.forEach(s => {
        if(s.carta === carta) {
            fresata = s.fresata
            cucita = s.cucita
        }
    });
    
    const fogli = pagine / 2

    if(rilegatura == 'fresata') {
        dorso = (fogli * fresata)/1000
    } else {
        dorso = (fogli * cucita)/1000
    }

    const html_dorso = document.getElementById('html_dorso')
    html_dorso.innerHTML = dorso.toFixed(1)
}

let num = document.querySelector('#html_pagine');
num.addEventListener('input', function () {
	let pagine = parseInt(document.getElementById("html_pagine").value)
    let carta = document.getElementById("html_carta").value
    let rilegatura = document.getElementById("html_rilegatura").value
    calculate(pagine, carta, rilegatura)
});

onChangeValue()