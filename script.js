var conversorDiv1 = document.getElementById("conversor1");
var botao1 = document.getElementById("botao1");

var conversorDiv2 = document.getElementById("conversor2")
var botao2 = document.getElementById("botao2")

var conversorDiv3 = document.getElementById("conversor3")
var botao3 = document.getElementById("botao3")

var conversorDiv4 = document.getElementById("conversor4")
var botao4 = document.getElementById("botao4")


function mostrarConversor1() {
   conversorDiv2.style.display = "none"
   conversorDiv3.style.display = "none"
   conversorDiv4.style.display = "none"
   
   
   botao2.disabled = false 
   botao3.disabled = false 
   botao4.disabled = false 
  conversorDiv1.style.display = "initial"
  botao1.disabled = true
} 
function mostrarConversor2() {
 
   conversorDiv1.style.display = "none"
   conversorDiv3.style.display = "none"
   conversorDiv4.style.display = "none"

   botao3.disabled = false 
   botao4.disabled = false 
   botao1.disabled = false   
   conversorDiv2.style.display = "initial"
   botao2.disabled = true
}
function mostrarConversor3() {
   conversorDiv1.style.display = "none"
   conversorDiv2.style.display = "none"
   conversorDiv4.style.display = "none"

  
   botao2.disabled = false 
   botao4.disabled = false 
   botao1.disabled = false   
   conversorDiv3.style.display = "initial"
   botao3.disabled = true
  
} 
function mostrarConversor4() {
   conversorDiv1.style.display = "none"
   conversorDiv2.style.display = "none"
   conversorDiv3.style.display = "none"
  
   botao2.disabled = false 
   botao3.disabled = false  
   botao1.disabled = false   
   conversorDiv4.style.display = "initial"
   botao4.disabled = true  
}

function converterDolar() {
let valorCampoTexto = document.getElementById("valor-dolar").value
let valorConvertido = (valorCampoTexto*5.39).toFixed(1)
let campoResultado =  document.getElementById("resultado1")
campoResultado.innerHTML = valorCampoTexto +" U$ dolares são " + valorConvertido + "R$ reais" 
}
function converterEuro() {
   let valorCampoTexto = document.getElementById("valor-euro").value
   let valorConvertido = (valorCampoTexto*6.3).toFixed(1)
   let campoResultado =  document.getElementById("resultado2")
   campoResultado.innerHTML = valorCampoTexto +" euros " + valorConvertido + "R$ reais" 
}
function converterIene() {
   let valorCampoTexto = document.getElementById("valor-iene").value
   let valorConvertido = (valorCampoTexto*0.049).toFixed(1)
   let campoResultado =  document.getElementById("resultado3")
   campoResultado.innerHTML = valorCampoTexto +" JP¥ são " + valorConvertido + "R$ reais" 
}
function converterPeso() {
   let valorCampoTexto = document.getElementById("valor-peso").value
   let valorConvertido = (valorCampoTexto*0.055).toFixed(1)
   let campoResultado =  document.getElementById("resultado4")
   campoResultado.innerHTML = valorCampoTexto +"  pesos são " + valorConvertido + "R$ reais" 
}


function resetar() {
let campoDeTexto = document.getElementById("valor-dolar");
let campoTexto2 = document.getElementById("valor-euro");
let campoTexto3 = document.getElementById("valor-iene");
let campoTexto4 = document.getElementById("valor-peso");
campoDeTexto.value = null  
campoTexto2.value = null  
campoTexto3.value = null
campoTexto4.value = null

}