//

var numero = 1;
function countNumero(){
    numero++
}

async function onLoad(){
    //for(var i = 1; i < numero; i++){
        const url = await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${numero}`);
        const resultado = await url.json();
        console.log(resultado);
    //}
}

