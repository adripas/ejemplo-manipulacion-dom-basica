//h1{color:red} MOdificar html desde JAVASCRIPT
const h1= document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const presult = document.querySelector('#resultado');
const form = document.querySelector('#form');

form.addEventListener('submit', sumaInputsValues);


function sumaInputsValues(event){
console.log("Escuchando el evento de click");
event.preventDefault(); // para qeu no se ejecute el cargar la pagina
sumaInputs =parseInt(input1.value) +parseInt(input2.value);
presult.innerText = "Resultado: "+sumaInputs;
}

