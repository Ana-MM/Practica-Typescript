import { Direccion } from "./direccion";
import { Mail } from './mail';
import { Telefono } from './telefono';

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleaños: Date;
    private _color: string;
    private _sexo: string;
    private _direcciones: Direccion[];
    private _mails: Mail[];
    private _telefonos: Telefono[];
    private _notas: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: Date, color: string, sexo: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas: string) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._color = color;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;

    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
    public get dni(): string {
        return this._dni;
    }
    public set dni(value: string) {
        this._dni = value;
    }
    public get cumpleaños(): Date {
        return this._cumpleaños;
    }
    public set cumpleaños(value: Date) {
        this._cumpleaños = value;
    }
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }
    public get sexo() {
        return this._sexo;
    }
    public set sexo(value) {
        this._sexo = value;
    }
    public get direcciones() {
        return this._direcciones;
    }
    public set direcciones(value) {
        this._direcciones = value;
    }

    public agregarDireccion(value: Direccion) {
        this._direcciones.push(value);
    }

    public get mail() {
        return this._mails;
    }
    public set mail(value) {
        this._mails = value;
    }

    public agregarMail(value: Mail) {
        this._mails.push(value);
    }

    public get telefono() {
        return this._telefonos;
    }
    public set telefono(value) {
        this._telefonos = value;
    }

    public agregarTelefono(value: Telefono) {
        this._telefonos.push(value);
    }
    public get notas() {
        return this._notas;
    }
    public set notas(value) {
        this._notas = value;
    }

    imprimirPersona(): void {
        console.log(this._nombre, this._apellidos, this._edad, this._dni, this._cumpleaños, this._color, this._sexo, this._mails, this._telefonos, this._notas);

        console.log("-----Direcciones-----")

        for (let i = 0; i < this._direcciones.length; i++) {
            console.log(this._direcciones[i])
        }
        console.log("-----Mails-----")
        for (let i = 0; i < this._mails.length; i++) {
            console.log(this._mails[i])
        }

        console.log("-----Telefonos-----")
        for (let i = 0; i < this._telefonos.length; i++) {
            console.log(this._telefonos[i])
        }
    }
}