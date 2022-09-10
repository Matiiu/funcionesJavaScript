/* 1.PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus aprendices
Padawan a calcular la distancia a la que cualquiera de los planetass de la
ruta N-14 pertenecientes a la ruta comercial de la federación
intergaláctica, se encuentra del planetas NABOO.
Para calcular dicha distancia se debe:
• Recibir las coordenadas X,Y del planetas en UA
• Establecer la distancia como: */

let planetas = [ 'Babbadod', 'Baroli', 'Dargulli', 'Itani', 'Pamorjal', 'Shibric', 'Tynna', 'Vernet']

let X
let Y

planeta = 'Baroli'

if(planeta == planetas[0]) {
    x = 234.063
    y = -406.085
}
if(planeta == planetas[1]) {
    x = 233.433
    y = -478.653
}
if(planeta == planetas[2]) {
    x = 206.044
    y = -441.964
}
if(planeta == planetas[3]) {
    x = 222.874
    y = -415.239
}
if(planeta == planetas[4]) {
    x = 281.629
    y = -442.016
}
if(planeta == planetas[5]) {
    x = 235.173
    y = -437.248
}
if(planeta == planetas[6]) {
    x = 287.136
    y = -404.955
}
if(planeta == planetas[7]) {
    x = 268.641
    y = -479.289
}

console.log(`La distancia entre Naboo y ${planeta} es de: ${Math.sqrt(Math.pow((x - 334.442),2) + Math.pow((y - -707.231),2))} unidades astronómicas (UA)` )
