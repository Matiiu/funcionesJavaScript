/* PROBLEMA: QUI-GON JINN está encargado de revisar n sables
de luz y contabilizar la cantidad de energía de sables que tienen
negativa en Joules. 
Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables
defectuosos con energía negativa fue de 2 sables.*/


let sables = [2, 4, -8, 5, -6, -1, -3, 5]
let cont = 0
for(let i = 0; i < sables.length; i++) {
    if(sables[i] < 0)    cont++
}

console.log( `El número de sables defectuosos es: ${cont}`  )