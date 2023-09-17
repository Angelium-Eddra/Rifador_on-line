var valor_final = 0.00;
var valor = 5.00;

function inserirNumero(selecionado){
    var mostrar_valor_final = document.getElementById('valor');
    valor_final += valor;

    mostrar_valor_final.innerHTML = "Preço final: R$" + valor_final;
    // inserir no formulário o numero selecionado
    
}

function removerNumero(selecionado){
    var mostrar_valor_final = document.getElementById('valor');
    valor_final -= valor;
    
    mostrar_valor_final.innerHTML = "Preço final: R$" + valor_final;
    // remover do formulário o numero selecionado
}



function escolhido(numero_clicado){
    var marcado = document.getElementById(numero_clicado);
    var estado = getComputedStyle(marcado).backgroundColor;
    
    
    
    if(estado == "rgb(0, 0, 255)"){
        marcado.style.backgroundColor = "rgb(128, 128, 128)"
        inserirNumero(numero_clicado);
    }
    else if(estado == "rgb(128, 128, 128)"){
        marcado.style.backgroundColor = "rgb(0, 0, 255)"
        removerNumero(numero_clicado);
    }
}