//---------------------------------------
// Zona declaración de variables globales
//---------------------------------------

var textoSalida = document.querySelector('p')

var refBotonGato1 = document.getElementById('boton-gato1')
var refBotonGato2 = document.getElementById('boton-gato2')
var refBotonGato3 = document.getElementById('boton-gato3')

var botonReset = document.getElementById('reset')

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
        analisis()
        textoAnalizado = textoSalida.innerText
        console.log(textoAnalizado, typeof textoAnalizado)
        agregarConjunto()    
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
        agregarConjunto()  
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
        agregarConjunto()  
        
    }
}
 */

function analisis(){
  //  textoAnalizado = textoSalida.innerText.split('')
    textoAnalizado = textoSalida.innerText
    console.log(textoAnalizado)
    console.warn('el analisis funciona correcto')
}

function agregarConjunto(){
    console.error('El agregar conjunto esta funcionando correctamente')
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
