import { Injectable } from "@angular/core";

@Injectable()
export class HeroesService {
  // propiedad privada para que no puede ser accesada fuera de la  claseo servicio
  private heroes: Heroe[] = [
    {
      nombre: "Hamburguesa completa",
      desc: "Hamburgesa completa: carne, queso, lechuga, tomate, huevo y jamon",
      img: "assets/img/hamburgesa-completa.png",
      precio: "$90"
    },
    {
      nombre: "Hamburguesa con queso",
      desc: "Hamburgesa doble con queso",
      img: "assets/img/hamburgesa-con-queso.png",
      precio: "$70"
    },
    {
      nombre: "Papas fritas",
      desc: "Papas crujientes y deliciosas",
      img: "assets/img/papas.png",
      precio: "$80"
    }
  ];

  // Creamos un metodo para obtener los personajes Star
  getHeroes(): Heroe[] {
    return this.heroes;
  }

  getHeroe(idx: string) {
    return this.heroes[idx]; // .this: hace referencia los heroes
  }

  buscarHeroes(termino: string): Heroe[] {
    let heroesArr: Heroe[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.heroes.length; i++) {
      let heroe = this.heroes[i];

      let nombre = heroe.nombre.toLowerCase();

      if (nombre.indexOf(termino) >= 0) {
        heroe.idx = i;
        heroesArr.push(heroe);
      }
    }

    return heroesArr;
  }
}

// Creamos una interfaz para que no se puedan insertar ningun heroe que no tenga las caracteristicas del JSON
export interface Heroe {
  nombre: string;
  desc: string;
  img: string;
  precio: string;
  idx?: number;
}
