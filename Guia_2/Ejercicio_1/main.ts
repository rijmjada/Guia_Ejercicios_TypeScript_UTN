import {Punto} from "./Punto"; 
import { Rectangulo } from "./Rectangulo";


let v1 = new Punto(1,1);
let v3 = new Punto(4,3);

let rectangulo = new Rectangulo(v1, v3);

console.log("Area: " + rectangulo.GetArea());
console.log("Perimetro: " + rectangulo.GetPerimetro());
console.log("Datos: " + rectangulo.ToString())