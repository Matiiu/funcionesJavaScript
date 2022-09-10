/* 7.PROBLEMA: Han solo y Chewbacca deben infiltrarse en el planeta yavin4 para robar uno de los planos de una de las 10 estrellas de la muerte, como distractor el imperio ha creado planos falsos y se tiene el dato de que el número de serie de estos planos falsos comienza por encima del número 10; es decir todos los planos falsos tienen números de serie consecutivos comenzando desde el #11. SOLO si se obtiene un plano */

function filtrarPlanos(planos, despegarNave) {

    let filtro = planos.filter(plano => plano > 0 && plano < 11)

    despegarNave(filtro)
}

let planos = [10, 100, 200, 300, 400, 500, 1, 10, 9, 3000, 9]
filtrarPlanos(planos, (filter) => {
    let cuenta = 0
    cuenta = filter.length
    if (cuenta > 0) {
        console.log('Buscando datos...')
        setTimeout(() => {
            console.log('La nave despega en 3')
        }, 1500);
        setTimeout(() => {
            console.log('2')
        }, 3000);
        setTimeout(() => {
            console.log('1')
        }, 4000);
        setTimeout(() => {
            console.log('Buen viaje.')
        }, 6000);
    } else {
        console.log('Buscando datos...')
        setTimeout(() => {
            console.log('No se encontraron datos.')
        }, 4000);
    }
})