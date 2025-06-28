//---------------------------------------
// Zona declaración de variables globales
//---------------------------------------
var refBotonGato1 = document.getElementById('boton-gato1')
var refBotonGato2 = document.getElementById('boton-gato2')
var refBotonGato3 = document.getElementById('boton-gato3')

var botonReset = document.getElementById('reset')

var textoSalida = document.querySelector('p')

var textoARepresentar = []

//---------------------------------------
// Zona de declaración de funciones globales
//---------------------------------------

function agregarGato1(){
    refBotonGato1.onclick = ()=>{
        
        textoARepresentar.push('😺') 

        textoSalida.innerText = textoARepresentar.join('')

        detectarRepeticiones()
    }

}

function agregarGato2(){
    refBotonGato2.onclick = ()=>{
        
        textoARepresentar.push('😸') 

        textoSalida.innerText = textoARepresentar.join('')

        detectarRepeticiones()
    }

}

function agregarGato3(){
    refBotonGato3.onclick = ()=>{
        
        textoARepresentar.push('😹') 

        textoSalida.innerText = textoARepresentar.join('')

        detectarRepeticiones()
    }

}

function detectarRepeticiones() {
    console.warn(textoARepresentar)

    for (let i = 4; i < textoARepresentar.length; i++) {
        if (textoARepresentar[i] === textoARepresentar[i - 1] &&
            textoARepresentar[i] === textoARepresentar[i - 2] &&
            textoARepresentar[i] === textoARepresentar[i - 3] &&
            textoARepresentar[i] === textoARepresentar[i - 4] &&
            textoARepresentar[i] === textoARepresentar[i - 5] &&
            textoARepresentar[i] != '⬛'
        ) 
        {
            console.error('se repitio 5 veces un emoji')

            let indice = textoARepresentar.lastIndexOf('⬛')
            
            textoARepresentar.splice(i - 5, 6)
            
            textoARepresentar.unshift('⬛')
            
            break
        }
    }

    textoSalida.innerText = textoARepresentar.join('')
}



function reset(){                            //Agrege un boton de reset para reiniciar el texto en pantalla a gusto
    botonReset.onclick = () =>{
        console.log('RESET')
        textoSalida.innerText = ''
        textoARepresentar = []
        console.clear()
    }
}

function start() {
    detectarRepeticiones()
    agregarGato1()
    agregarGato2()
    agregarGato3() 
    reset()
}

//---------------------------------------
// Zona de arranque
//---------------------------------------
window.onload = start