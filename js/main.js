//
const elementoBoxProduto = document.getElementById('elementoProduto')

async function onLoad(){
    var numero = 30;
    for(var i = 1; i < numero; i++){
        const url = await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${i}`);
        const resultado = await url.json();
        console.log(resultado);
    }
}