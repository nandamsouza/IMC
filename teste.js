function clicar(){
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var res = document.getElementById('res')
    var imc = ""

    imc = Number(peso)/(Number(altura)**2)
    if(imc <= 18.5){
        res.innerHTML=` IMC: Menor que 18,5 <br> Classificação: Magreza. `
    }else if(imc > 18.5 && imc < 24.9){
        res.innerHTML=` IMC: Entre 18.5 e 24.9 <br> Classificação: Normal`
    }else if(imc > 25 && imc < 29.9){
        res.innerHTML=` IMC: Entre 25 e 29 <br> Classificação: Sobrepeso <br>
        Obesidade(Grau): I `
    }else if(imc > 30 && imc < 39.9){
        res.innerHTML=` IMC: Entre 30 e 39 <br> Classificação: Obesidade <br>
        Obesidade(Grau): II `
    }else{
        res.innerHTML=` IMC: Maior que 40 <br> Classificação: Obesidade Grave <br>
        Obesidade(Grau): III `
    }
}