import { Persona } from "./persona";
import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from './telefono';

let direccion1 = new Direccion('Manuel Mañas', 8, 5, 'B', 20145, 'Sorbas', 'Almeria');
let direccion2 = new Direccion('Jazmin', 5, 7, 'D', 42586, 'Maracena', 'Granada');
let direccion3 = new Direccion('Maestria', 18, 9, 'C', 23589, 'Cordoba', 'Cordoba');


let mail1 = new Mail('Personal', 'anamariasorbas@hotmail.com');
let mail2 = new Mail('Trabajo', 'ejemplo@gmail.com');
let mail3 = new Mail('Personal', 'niidea@outlook.com');

let telefono1 = new Telefono('Movil', 625418962);
let telefono2 = new Telefono('Fijo', 932145821);
let telefono3 = new Telefono('Movil', 642454521);

let persona1 = new Persona('Ana', 'Menchon', 31, '75723956K', new Date(1989, 11, 21), 'morado', 'mujer', [direccion1], [mail1], [telefono1], 'Hola')
let persona2 = new Persona('Maria', 'Lopez', 27, '78365421P', new Date(1993, 10, 10), 'azul', 'mujer', [direccion2], [mail2], [telefono2], "")
let persona3 = new Persona('Juan', 'Martinez', 60, '47239561T', new Date(1961, 3, 6), 'rojo', 'hombre', [direccion3], [mail3], [telefono3], 'Hola, soy Juan')

console.log(persona1);
console.log(persona2);
console.log(persona3);

let listaPersonas = [persona1, persona2, persona3];

let _dnis: string[] = new Array('75723956K', '78365421P', '47239561T')
for (let i = 0; i < _dnis.length; i++) {
    let dni = _dnis[i]

    for (let j = 0; j < listaPersonas.length; j++) {
        let persona = listaPersonas[j]
        if (persona.dni == dni) {
            console.log(persona.nombre, dni)
            break
        }

    }
}

for (let j = 0; j < listaPersonas.length; j++) {
    let persona = listaPersonas[j]
    if (persona.dni == '75723956K') {

//Añadimos direccion
        
        let direccion = new Direccion('El Dorado', 5, 9, 'D', 32158, 'Cartagena', 'Murcia')
        persona.agregarDireccion(direccion)

//Añadimos Mail
        
        let mail = new Mail('Trabajo', 'pepito@gmail.com')
        persona.agregarMail(mail)

//Añadimos Telefono
        
        let telefono = new Telefono('Trabajo', 634895314)
        persona.agregarTelefono(telefono)

        break
    }

}

persona1.imprimirPersona()
persona2.imprimirPersona()
persona3.imprimirPersona()