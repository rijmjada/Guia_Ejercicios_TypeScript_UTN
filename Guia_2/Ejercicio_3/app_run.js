var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ejercicio03;
(function (Ejercicio03) {
    var Persona = /** @class */ (function () {
        // Constructor
        function Persona(apellido, nombre, dni, sexo) {
            this._apellido = apellido;
            this._nombre = nombre;
            this._sexo = sexo;
            this._dni = dni;
        }
        // Getters
        Persona.prototype.GetApellido = function () {
            return this._apellido;
        };
        Persona.prototype.GetNombre = function () {
            return this._nombre;
        };
        Persona.prototype.GetDni = function () {
            return this._dni;
        };
        Persona.prototype.GetSexo = function () {
            return this._sexo;
        };
        Persona.prototype.ToString = function () {
            return "Apellido: ".concat(this.GetApellido(), " - Nombre: ").concat(this.GetNombre(), " - DNI: ").concat(this.GetDni(), " - Sexo: ").concat(this.GetSexo());
        };
        return Persona;
    }());
    Ejercicio03.Persona = Persona;
})(Ejercicio03 || (Ejercicio03 = {}));
/// <reference path="./persona.ts" /> 
var Ejercicio03;
(function (Ejercicio03) {
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        // Constructor
        function Empleado(apellido, nombre, dni, sexo, legajo, sueldo) {
            var _this = _super.call(this, apellido, nombre, dni, sexo) || this;
            _this._legajo = legajo;
            _this._sueldo = sueldo;
            return _this;
        }
        // Getters
        Empleado.prototype.GetLegajo = function () {
            return this._legajo;
        };
        Empleado.prototype.GetSueldo = function () {
            return this._sueldo;
        };
        // Metodos
        Empleado.prototype.Hablar = function (idioma) {
            return "El empleado habla ".concat(idioma, ".");
        };
        Empleado.prototype.ToString = function () {
            return "".concat(_super.prototype.ToString.call(this), " - Legajo: ").concat(this.GetLegajo(), " - Sueldo: ").concat(this.GetSueldo());
        };
        return Empleado;
    }(Ejercicio03.Persona));
    Ejercicio03.Empleado = Empleado;
})(Ejercicio03 || (Ejercicio03 = {}));
/// <reference path="./persona.ts" /> 
/// <reference path="./empleado.ts" /> 
var emp_1 = new Ejercicio03.Empleado("Pocavida", "Marcelo", 95580580, "M", 666, 250321);
console.log(emp_1.Hablar("Geringoso"));
console.log(emp_1.ToString());
