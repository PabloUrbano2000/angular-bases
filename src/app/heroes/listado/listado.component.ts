import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[] = ['Pablo', 'Pedro', 'Maldy', 'Pabliiiiito']

  heroeBorrado: string | undefined = ""

  borrarHeroe(){
    this.heroeBorrado =  this.heroes.pop()
  }
}
