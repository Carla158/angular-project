import { Injectable } from "@angular/core";

@Injectable()
export class HeroesService {
  // propiedad privada para que no puede ser accesada fuera de la  claseo servicio
  private heroes: Heroe[] = [
    {
      nombre: "Hamburgesa completa",
      desc: "Hamburgesa completa bla bla",
      img: "assets/img/hamburgesa-completa.png",
      precio: "200$"
    },
    {
      nombre: "Hamburgesa con queso",
      desc: "Hamburgesa doble con queso",
      img: "assets/img/hamburgesa-con-queso.png",
      precio: "$180"
    },
    {
      nombre: "Combo Tostado",
      desc: "Papas crujientes y deliciosas",
      img: "assets/img/Tostado-jyq-y-cafe_0.png",
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
