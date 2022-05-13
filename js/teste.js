const botao = document.getElementById('botao');
const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resp = document.getElementById('resp');

botao.addEventListener('click', (evento) => {
    evento.preventDefault();

    validacao()
    calculo()
})

function validacao() {

    if (nome.value == '') {
        nome.classList.add("input_erro")
    } else {
        nome.classList.remove("input_erro")
    }
    if (altura.value == '') {
        altura.classList.add("input_erro")
    } else {
        altura.classList.remove("input_erro")
    }
    if (peso.value == '') {
        peso.classList.add("input_erro")
    } else {
        peso.classList.remove("input_erro")
    }
}

function calculo() {

    var imc = ''

    if (Number(peso.value) == '' || Number(altura.value) =='' || nome.value == '') {
        resp.innerHTML = `Comentário`
    } else {
        imc = Number(peso.value) / (Number(altura.value) ** 2)
        if (imc <= 18.5) {
            resp.innerHTML = `Olá ${nome.value}! <br> Seu imc é [${Number(imc).toFixed(1)}]; <br> IMC menor que 18.5 <br> Classificação [ABAIXO DO PESO]. <br> 😐😐😐`
            
        } else if (imc > 18.5 && imc < 24.9) {
            resp.innerHTML = `Olá ${nome.value}! <br> Seu imc é [${Number(imc).toFixed(1)}]; <br> IMC entre 18.5 e 24.9 <br> Classificação[NORMAL]. <br> 😁😁😁`
            
        } else if (imc > 25 && imc < 29.9) {
         resp.innerHTML = `Olá ${nome.value}! <br> Seu imc é [${Number(imc).toFixed(1)}]; <br> IMC entre 25 e 29 <br> Classificação [SOBREPESO] <br> 😅😅😅`
        } else if (imc > 30 && imc < 39.9) {
         resp.innerHTML = `Olá ${nome.value}! <br> Seu imc é [${Number(imc).toFixed(1)}]; <br>Entre 30 e 39 <br> Classificação [OBESIDADE] <br> 😥😥😥`
        } else {
         resp.innerHTML = `Olá ${nome.value}! <br> Seu imc é [${Number(imc).toFixed(1)}]; <br> Maior que 40 <br> Classificação [OBESIDADE GRAVE] <br> 😮😮😮`
        }
    }
}

