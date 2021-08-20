"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var direccion1 = new direccion_1.Direccion('Manuel Mañas', 8, 5, 'B', 20145, 'Sorbas', 'Almeria');
var direccion2 = new direccion_1.Direccion('Jazmin', 5, 7, 'D', 42586, 'Maracena', 'Granada');
var direccion3 = new direccion_1.Direccion('Maestria', 18, 9, 'C', 23589, 'Cordoba', 'Cordoba');
var mail1 = new mail_1.Mail('Personal', 'anamariasorbas@hotmail.com');
var mail2 = new mail_1.Mail('Trabajo', 'ejemplo@gmail.com');
var mail3 = new mail_1.Mail('Personal', 'niidea@outlook.com');
var telefono1 = new telefono_1.Telefono('Movil', 625418962);
var telefono2 = new telefono_1.Telefono('Fijo', 932145821);
var telefono3 = new telefono_1.Telefono('Movil', 642454521);
var persona1 = new persona_1.Persona('Ana', 'Menchon', 31, '75723956K', new Date(1989, 11, 21), 'morado', 'mujer', [direccion1], [mail1], [telefono1], 'Hola');
var persona2 = new persona_1.Persona('Maria', 'Lopez', 27, '78365421P', new Date(1993, 10, 10), 'azul', 'mujer', [direccion2], [mail2], [telefono2], "");
var persona3 = new persona_1.Persona('Juan', 'Martinez', 60, '47239561T', new Date(1961, 3, 6), 'rojo', 'hombre', [direccion3], [mail3], [telefono3], 'Hola, soy Juan');
console.log(persona1);
console.log(persona2);
console.log(persona3);
var listaPersonas = [persona1, persona2, persona3];
var _dnis = new Array('75723956K', '78365421P', '47239561T');
for (var i = 0; i < _dnis.length; i++) {
    var dni = _dnis[i];
    for (var j = 0; j < listaPersonas.length; j++) {
        var persona = listaPersonas[j];
        if (persona.dni == dni) {
            console.log(persona.nombre, dni);
            break;
        }
    }
}
for (var j = 0; j < listaPersonas.length; j++) {
    var persona = listaPersonas[j];
    if (persona.dni == '75723956K') {
        //Añadimos direccion
        var direccion = new direccion_1.Direccion('El Dorado', 5, 9, 'D', 32158, 'Cartagena', 'Murcia');
        persona.agregarDireccion(direccion);
        //Añadimos Mail
        var mail = new mail_1.Mail('Trabajo', 'pepito@gmail.com');
        persona.agregarMail(mail);
        //Añadimos Telefono
        var telefono = new telefono_1.Telefono('Trabajo', 634895314);
        persona.agregarTelefono(telefono);
        break;
    }
}
persona1.imprimirPersona();
persona2.imprimirPersona();
persona3.imprimirPersona();
