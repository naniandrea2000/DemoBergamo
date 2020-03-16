import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoBergamo';

  HTMLString='<div><p>Prova</p></div>'

  getVal(){
    return 2;
  }
}
