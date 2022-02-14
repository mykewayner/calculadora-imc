export default function calcular(){

    const button = document.querySelector("#calcular");
    const valorFinal = document.querySelector(".valor p");
    

    button.addEventListener("click", () => {
        let peso = document.querySelector(".box-peso input").value;
        let altura = document.querySelector(".box-altura input").value;
        let calculo = peso / (altura * altura)

        let classificacao = ""
        if( calculo < 18,5){
            classificacao = "Abaixo do Peso"
        }
        else if(calculo < 24,9){
            classificacao = "Peso Normal"
        }else if(calculo < 29,9){
            classificacao = "Sobrepeso"
        }else if(calculo < 34,9){
            classificacao = "Obesidade Grau I"
        }else if(calculo < 39,9){
            classificacao = "Obesidade Grau II"
        }else{
            classificacao = "Obesidade Mórbida"
        }

        
        
        
        
        
        
        
        valorFinal.innerHTML = `IMC: ${calculo.toFixed(0)} (${classificacao})`

    }

    )









   






}