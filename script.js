var numtxt = document.getElementById('num1')
var resul = document.getElementById('resp')
var res = document.getElementById('result')
var numeros = []

function emlista (n,l) {

  if(l.indexOf(Number(n)) == -1) {

    return true
  }else {

    return false
  }


}

function verificador (n) {

if ( Number(n) >= 1 && Number(n) <= 100) {


  return true
}else {

  return false
}



}

function createTable (info) {

var lista = document.createElement('tr')

lista.textContent = info

return lista

}



function adicionar () { 
 
  if ( !verificador(numtxt.value) ){

    window.alert('Valor inválido ou ja Encontrado na lista')
 
  }else if (emlista(numtxt.value,numeros)){
    
    resul.appendChild(createTable(`O numero  ${Number(numtxt.value)} foi adicionado.`))
   
    numeros.push(Number(numtxt.value))
    numtxt.value=``
    res.innerHTML = ``

  }  else {

    window.alert('Valor inválido ou ja Encontrado na lista')
  }
  return true
}

function num (ni) {
var soma = 0
for(var i = 0; i < Number(ni.length); i++){

  soma += ni[i]
   
}
  return soma  
}

function divisao (diver) {
  var soma1 = 0
  
for(var ii = 0; ii < Number(diver.length); ii++){
  
  soma1 += diver[ii]
}
   var aotodo = Number(diver.length)
   total = (soma1 / aotodo)
return total
}
function finalizar () {


  res.style.border = 'solid'
  res.innerHTML += `temos ao todo <strong>${numeros.length}</strong> números cadastrados </br> `

  var maior = Math.max.apply(null, numeros)

  res.innerHTML += `O numero maior adicionado é <strong>${maior}</strong> </br>`

  var menor = Math.min.apply(null, numeros)
    
  res.innerHTML += `O numero menor adicionado é <strong>${menor}</strong></br>`  

  var total = (num(numeros))

  res.innerHTML += `O Total  da soma é <strong> ${total}</strong></br>`  

  var divis = (divisao(numeros))

  res.innerHTML += `A média dos valores digitados é  <strong>${divis.toFixed(2)}</strong></br>`  


}


function limpar() {
 
  numtxt.value=``
  res.innerHTML = ``
  numeros = []
    resul.innerHTML = ``
    res.style.border = ''  
}


   



  


  

  


 


  

