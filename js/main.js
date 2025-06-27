//---------------------------------------
// Zona declaración de variables globales
//---------------------------------------

var textoSalida = document.querySelector('p')

var refBotonGato = document.getElementById('boton-gato')
var refBotonPerro = document.getElementById('boton-perro')
var refBotonRaton = document.getElementById('boton-raton')

var botonReset = document.getElementById('reset')

var clicks = 0

//---------------------------------------
// Zona de declaración de funciones globales
//---------------------------------------

function agregarGato(){
    refBotonGato.onclick = ()=>{
        clicks++
        console.log(clicks)
        textoSalida.innerText += 'GATOO1' 
        analisis()
        var textoAnalizado = textoSalida.innerText.split('')
        agregarConjunto()
    }
}

/* function agregarPerro(){
    refBotonPerro.onclick = ()=>{
        clicks++
        console.log(clicks)
        textoSalida.innerText += 'GATO2' 
        analisis()
        var textoAnalizado = textoSalida.innerText.split('')
        if (textoAnalizado[3] == textoAnalizado[4]){
            agregarConjunto()
        }
        else{
            return
        }
    }
}

function agregarRaton(){
    refBotonRaton.onclick = ()=>{
        clicks++
        console.log(clicks)
        textoSalida.innerText += 'GATO3' 
        analisis()
        
    }
} */

function analisis(){
    var textoArray = textoSalida.innerText.split('')
    
    console.log(textoArray)
    console.log('el analisis funciona correcto')
}

function agregarConjunto(){
    textoAnalizado = textoSalida.innerText.split('')
    for(var caracter of textoAnalizado){
        console.log(caracter)
        if(caracter = caracter++){
            console.error('FUNCIONO') 
            console.log(textoAnalizado.join(''))
            textoSalida.innerText = 'FUNCIONO' + textoAnalizado.join('') + 'FUNCIONNOOO' 
        }
    }
}

function reset(){
    botonReset.onclick = () =>{
        console.log('RESET')
        textoSalida.innerText = ''
        clicks = 0
    }
}

function start() {
    agregarGato()
  /*   agregarPerro()
    agregarRaton() */
    reset()
}

//---------------------------------------
// Zona de arranque
//---------------------------------------
window.onload = start
