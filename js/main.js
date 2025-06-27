//---------------------------------------
// Zona declaración de variables globales
//---------------------------------------
var refBotonGato1 = document.getElementById('boton-gato1')
var refBotonGato2 = document.getElementById('boton-gato2')
var refBotonGato3 = document.getElementById('boton-gato3')

var botonReset = document.getElementById('reset')

var textoSalida = document.querySelector('p')

var textoAnalizado

var clicks = 0

//---------------------------------------
// Zona de declaración de funciones globales
//---------------------------------------

function agregarGato1(){
    refBotonGato1.onclick = ()=>{
        clicks++
        console.log(clicks + ': cantidad de clicks')

        textoSalida.innerText += '😺' 
        textoAnalizado = textoSalida.innerText

        console.log(textoAnalizado, typeof textoAnalizado)
        convertirTextoEnArray() 
        
    }
}

/* function agregarGato2(){
    refBotonGato2.onclick = ()=>{
        clicks++
        console.log(clicks)
        textoSalida.innerText += '😸' 
        analisis()
        textoAnalizado = textoSalida.innerText
        console.log(textoAnalizado)
        convertirTextoEnArray()  
    }
}

function agregarGato3(){
    refBotonGato3.onclick = ()=>{
        clicks++
        console.log(clicks)
        textoSalida.innerText += '😹' 
        analisis()
        textoAnalizado = textoSalida.innerText
        console.log(textoAnalizado)
        convertirTextoEnArray()  
        
    }
}
 */

function convertirTextoEnArray(){
    console.error('TEXTO A ARRAY ESTA FUNCIONANDO' , textoAnalizado, typeof textoAnalizado)

    textoHechoArray = textoAnalizado.split('"\"')
    console.error(textoHechoArray, typeof textoHechoArray)
}

function reset(){
    botonReset.onclick = () =>{
        console.log('RESET')
        textoSalida.innerText = ''
        clicks = 0
        console.clear()
    }
}

function start() {
    agregarGato1()
    /* agregarGato2()
    agregarGato3() */
    reset()
}

//---------------------------------------
// Zona de arranque
//---------------------------------------
window.onload = start
