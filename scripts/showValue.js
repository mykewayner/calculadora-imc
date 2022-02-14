export default function showValue(){

    let peso = document.querySelector("#peso-input").value
    let altura = document.querySelector(".box-altura input").value
    const pesoValue = document.querySelector("#peso-value")

    peso.addEventListener("input", () => {
        pesoValue.textContent = peso.value;

    }
    
    
    
    
    )






}


