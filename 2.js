/* 
2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de
acceso a las naves de guerra los cuáles reposan en la base de datos
central, para ello debe programar una función que permita recibir la
palabra clave de cada nave y separar imprimiendo solo el nombre del
piloto asignado a cada nave.
Tenga en cuenta que el formato de todos los datos es el siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn
 */

function asignadorNave(codigo) {

let pilotos = ['ARQ2555: Sara Bel-Sun', 'ARQ2556: Nodin Chavdri', 'ARQ2557: Finn'];

if(codigo == 'ARQ2555' ) {
 pilotos = pilotos[0].split('ARQ2555:')       
    console.log(pilotos)
}
if(codigo == 'ARQ2556') {
 pilotos = pilotos[1].split('ARQ2556:')  
 console.log(pilotos)
}
if(codigo == 'ARQ2557') {
    pilotos = pilotos[2].split('ARQ2557:')  
    console.log(pilotos)
}
}
        
asignadorNave('ARQ2557')

