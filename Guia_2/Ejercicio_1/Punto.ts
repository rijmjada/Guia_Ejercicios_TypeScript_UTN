
export class Punto {
    // Atributos
    private eje_x: number;
    private eje_y: number;

    // Constructor
    public constructor(x: number, y: number) {
        this.eje_x = x;
        this.eje_y = y;
    }

    // Metodos Getters
    public GetX(): number {
        return this.eje_x;
    }
    public GetY(): number {
        return this.eje_y;
    }
}
