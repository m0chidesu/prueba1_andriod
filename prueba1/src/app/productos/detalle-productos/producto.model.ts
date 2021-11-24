export interface Producto{
    id : string;
    nombre : string;
    disponibilidad: boolean;
    imagenURL : string;
    precio : number;
    comentarios : string;
    categoria : string;
    escala : string;
}
export interface Marca{
    id : string;
    nombreMarca : string;
}