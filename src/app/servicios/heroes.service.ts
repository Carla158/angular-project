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
      nombre: "Boba-Fett",
      desc:
        "Boba Fett fue un cazarrecompensas humano, y el clon del infame cazarrecompensas Jango Fett. Boba fue creado por los clonadores de Kamino y era físicamente idéntico a los soldados clon creados para el Gran Ejército de la República, aunque Boba fue inalterado y no creció aceleradamente como los demás clones. Criado como el hijo de Jango, Boba aprendió las habilidades de combate necesarias para algún día convertirse en cazarrecompensas por derecho propio.Jango fue asesinado durante la Batalla de Geonosis, que marcó el inicio de las Guerras Clon entre la República Galáctica y la Confederación de Sistemas Independientes. El joven Boba juró vengarse del Maestro Jedi Mace Windu, que había matado a Jango, y se unió a un grupo de cazarrecompensas entre los que se encontraban Aurra Sing y Bossk. Su complot para matar a Windu fracasó, y Boba se dio cuenta de que había ido demasiado lejos en sus ansias por asesinar al Maestro Jedi - pero juró nunca perdonar a Windu. Tras un breve tiempo en prisión, Boba formó un equipo de cazarrecompensas y emprendió diversas misiones.",
      img: "assets/img/starwars-boba-fett.png",
      precio: "1997-05-01"
    },
    {
      nombre: "C-3po",
      desc:
        "C-3PO, a veces deletreado Cetrespeó y referido a menudo simplemente como Trespeó, era un droide de protocolo unidad 3PO diseñado para interactuar con seres orgánicos, programado principalmente para la etiqueta y el protocolo. Hablaba con fluidez más de siete millones de formas de comunicación, y desarrolló una personalidad exigente y propensa a las preocupaciones a lo largo de sus muchas décadas de operación.",
      img: "assets/img/starwars-c-3po.png",
      precio: "1997-01-01"
    },
    {
      nombre: "Chewbacca",
      desc:
        "Chewbacca, llamado afectuosamente Chewie por sus amigos, fue un guerrero wookiee, un contrabandista y un luchador de resistencia que peleó en las Guerras Clon, la Guerra Civil Galáctica y el Conflicto Primera Orden-Resistencia. Fue criado en el planeta Kashyyyk y se convirtió en un líder militar.",
      img: "assets/img/starwars-chewbacca.png",
      precio: "1997-05-01"
    },
    {
      nombre: "Darth-Vader",
      desc:
        "Anakin Skywalker fue un humano sensible a la Fuerza que sirvió a la República Galáctica como Caballero Jedi y más tarde al Imperio Galáctico como el Lord Sith Darth Vader. Creído de haber sido concebido por la Fuerza, nació de Shmi Skywalker y pasó a residir en el planeta del Borde Exterior Tatooine cuando era niño, donde él y su madre fueron esclavos de la prominente señora del crimen Gardulla la Hutt hasta que pasaron a ser propiedad de un chatarrero local toydariano llamado Watto.Un ingeniero prodigioso, Skywalker construyó al droide de protocolo C-3PO usando piezas que había recolectado para ayudar a su madre. Poco después, durante la Crisis de Naboo, fue descubierto por el Maestro Jedi Qui-Gon Jinn y su aprendiz, Obi-Wan Kenobi, quienes lo liberaron de la esclavitud tras participar Skywalker en una exitosa carrera de vainas. Llevándolo ante la Orden Jedi, Jinn presentó a Skywalker como el Elegido de la Profecía Jedi, destinado a destruir a los Sith y traer el equilibrio a la Fuerza.",
      img: "assets/img/starwars-darth-vader.png",
      precio: "1940-06-01"
    },
    {
      nombre: "Stormtrooper",
      desc:
        "Los soldados de asalto fueron las tropas de asalto del Imperio Galáctico. Los ciudadanos se referían a ellos como Cabezas de cubo, un apodo despectivo inspirado en los cascos en forma de cubo de los soldados de asalto. Como miembros del Cuerpo de Soldados de asalto, una rama independiente que operaba bajo el Ejército Imperial, los soldados de asalto representaban la columna vertebral del Fuerzas Armadas Imperiales—entrenados para la obediencia total al mando jerárquico, así como la lealtad absoluta al Emperador Sheev Palpatine y al régimen Imperial. Los soldados de asalto fueron entrenados en Academias Imperiales, y usaron una variedad de armas.",
      img: "assets/img/starwars-stormtrooper.png",
      precio: "1962-08-01"
    },
    {
      nombre: "Yoda",
      desc:
        "Yoda un miembro masculino de una especie misteriosa, era un reverenciado Maestro Jedi que sirvió como Gran Maestro de la Orden Jedi en los últimos días de la República Galáctica. Era famoso dentro de la Orden por su sabiduría, poderes de la Fuerza y combate con sables de luz, y vivió durante casi 900 años. Su tiempo durante los últimos días de la Orden Jedi y más allá lo convirtió en una figura consecuente en la historia galáctica.",
      img: "assets/img/starwars-yoda.png",
      precio: "1974-11-01"
    },
    {
      nombre: "R2-D2",
      desc:
        "R2-D2, pronunciado Erredós Dedós y a menudo referido como Erredós, era un droide astromecánico de la serie R2 fabricado por Industrias Automaton que tenía una programación masculina. Era un droide inteligente y valiente que sirvio a una multitud de maestros a lo largo de su vida, y nunca recibió un borrado de memoria completo (aparte de un borrado mental parcial por Cad Bane durante la crisis de rehenes del Senado) ni ha recibido programación nueva, con estos factores desarrollo una actitud aventurera e independiente. A menudo se encontraba en momentos cruciales en la historia galáctica, y su valentía e ingenio a menudo salvaba a la galaxia una y otra vez.",
      img: "assets/img/starwars-r2-d2.png",
      precio: "1974-11-01"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }

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
