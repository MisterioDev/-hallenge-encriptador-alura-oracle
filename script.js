const inputIngresado = document.querySelector('#ingreseTexto');
const inputResultado = document.querySelector('#textoResultado');

const btnEncriptar = document.querySelector('#encriptar');
const btnDesencriptar = document.querySelector('#desencriptar');

const btnCopiar = document.querySelector('#btn-copiar');

function encriptar() {
  let textoIngresado = inputIngresado.value;
  let procesoEncriptado = textoIngresado.replace(/e/, 'enter').replace(/i/, 'imes').replace(/o/, 'ober').replace(/a/, 'ai').replace(/u/, 'ufat');

  document.getElementById('textoResultado').style.backgroundImage = 'none';
  document.getElementById('sin-uso').style.visibility = 'hidden';
  document.getElementById('button-copiar').style.visibility = 'visible';

  inputResultado.value = procesoEncriptado;

  if (inputIngresado.value === '') {
    document.getElementById('textoResultado').style.backgroundImage = 'url(images/Muñeco.png)';
    document.getElementById('sin-uso').style.visibility = 'visible';
    document.getElementById('button-copiar').style.visibility = 'hidden';
  }
}

function desencriptar() {
  let textoEncriptado = inputIngresado.value;
  let procesoDesencriptado = textoEncriptado.replace(/enter/, 'e').replace(/imes/, 'i').replace(/ober/, 'o').replace(/ai/, 'a').replace(/ufat/, 'u');

  document.getElementById('textoResultado').style.backgroundImage = 'none';
  document.getElementById('sin-uso').style.visibility = 'hidden';
  document.getElementById('button-copiar').style.visibility = 'visible';

  inputResultado.value = procesoDesencriptado;

  if (inputIngresado.value === '') {
    document.getElementById('textoResultado').style.backgroundImage = 'url(images/Muñeco.png)';
    document.getElementById('sin-uso').style.visibility = 'visible';
    document.getElementById('button-copiar').style.visibility = 'hidden';
  }
}

function copiar() {
  let textoaCopiar = inputResultado.value;
  navigator.clipboard.writeText(textoaCopiar);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
