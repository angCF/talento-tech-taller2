// PARTE 1: TIPOS DE DATOS
console.log('PARTE 1: TIPOS DE DATOS')
let texto : string = "TIPOS DE DATOS"
let numero : number = 23
let booleano : boolean = true
let arreglo : string[] = ["HOLA", "MUNDO", "DE", "SOFTWARE"]
let objeto = {
    nombre: "Juan",
    apellido: "Pérez"
}
// USO DE TIPOS DE LITERALES
let persona : 'niño' | 'adolescente' | 'adulto';
persona = 'niño';
console.log(persona)
// PARTE 2: CONDICIONALES
console.log('PARTE 2: CONDICIONALES')
/*Para dar un ejemplo de condicionales el programa va a verificar si un numero es par o impar */
let numeros = [1, 2, 3, 4, 5, 6, 7, 8]
numeros.forEach(element => {
    if(element % 2 === 0){
        console.log(`El numero ${element} es par`)
    }else{
        console.log(`El numero ${element} es impar`)
    }
});
// PARTE 3: FUNCIONES
console.log('PARTE 3: FUNCIONES')
function operaciones(mensaje?: string): void{
    if(mensaje){
        console.log(mensaje)
    }else{
        console.log("No escribiste un mensaje :(")
    }
}

let mensaje = 'HOLA MUNDO'
operaciones(mensaje)
operaciones()

function suma(numero1: number, numero2: number): number {
    return numero1 + numero2
}

console.log('El resultado es',suma(20, 30));