import { Component, OnInit } from "@angular/core";
import { HeroesService, Heroe } from "../../servicios/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html"
})
export class ProductosComponent implements OnInit {
  heroes: Heroe[] = []; // creo una variable de arreglos de heroes

  // el constructor se ejecuta antes que el ngOnInit
  constructor(private _heroesService: HeroesService, private router: Router) {
    //console.log("constructor");
  }
  // el ngOnInit nos permite renderizar un componente cuando la pagina ya esta actualizada
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes(); // utulizo el servicio
    //console.log( this.heroes );
  }

  verProducto(idx: number) {
    this.router.navigate(["/productos", idx]);
  }
}
