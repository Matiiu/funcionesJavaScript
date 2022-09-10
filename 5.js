/* 5. PROBLEMA: Watto paga a su personal de ventas un salario de
3500000 mensuales, más una comisión de 1500000 por cada
licencia de software vendida menos el 5% de deducciones por
impuestos. Codifica un programa que calcule e imprima el
salario mensual de un vendedor dado; */

let vendedor = true;
let salario = 3500000
let comision = 1500000

if(vendedor === true) {         
    return console.log(`El salario del vendedor es $${salario + (comision - (comision *0.05))}`)
}

console.log(`El salario del vendedor es ${salario}`)

