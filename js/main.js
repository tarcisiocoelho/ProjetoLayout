var numero = 1;
function countNumero(){
    numero++
}

/*
    Buscando dados na API através do método fetch();
    Transformando em uma função assíncrona para que retorne os dados
    conforme a página for carregando.
*/
async function onLoad(){
    const url = await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${numero}`);
    const resultado = await url.json();
    console.log(resultado.products);

    /*
        Mostrando na tela o resultado da busca através do forEach

    */
    resultado.products.forEach(function(item){
        console.log(item);
        document.getElementById('elementoProduto').innerHTML += `

        <div class="boxItens">
            <div>
                <img src="${item.image}">
            </div>

            <div class="descricaoProduto">
                <p id="tituloProduto">
                    ${item.name}
                </p>
                <p id="ocultarTexto">
                    ${item.description}
                </p>
                <p>
                    De: R$${item.oldPrice}
                </p>
                <span>
                    Por: R$${item.price}
                </span>
                <p>
                    ou ${item.installments.count}x de R$${item.installments.value.toString().replace(".", ",")}
                </p>
                <button id="botaoComprar" name="botaoComprar">Comprar</button>
            </div>          
        </div>
            ` 
    });
} 

onLoad()