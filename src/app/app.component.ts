import { Component } from '@angular/core';

// se requiere los argumentos del selector, template, y estilos
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// propiedades que se pasará al template
export class AppComponent {
  public title:string='Pablo'
}
