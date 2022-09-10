/* 6.PROBLEMA: Yoda el maestro jedi, necesita asignar a sus aprendices Padawans 2 actividades dependiendo de la edad de ellos:
• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años
Inicialmente, se debe programar una función que asocie los datos de: {nombre, planeta, edad y estatura} de 1 Padawan a un objeto y una vez este objeto sea creado se debe llamar a una función secundaria que clasifique y muestre en consola la actividad asignada al Padawan */

function crearAprendiz(name, planeta, edad, estatura, clasificarAprendiz) {

    let dateAprendiz = {
        name: name,
        planeta: planeta,
        edad: edad,
        estatura, estatura
    }
    clasificarAprendiz(dateAprendiz)
}

crearAprendiz('Mateo', 'Tierra', 15, 1.72, aprendiz =>{
    if(aprendiz.edad > 20) {
        console.log('Asignado para la clase de sable de luz')
    } else {
        console.log('Asignado a la clase de la fuerza')
    }
})



