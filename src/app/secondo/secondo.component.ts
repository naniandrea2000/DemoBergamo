import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {

  constructor() { }
  testo: string = '';

  ngOnInit(): void {
  }

  clickEvent(event: MouseEvent, param: string){
    alert('ho cliccato il pulsante '+ param);
    event.stopPropagation(); //serve per finire la propagazione
    //esempio:se l button è in un div e lo clicco contemporaneamente cliccherò anche il div quindi
    //se voglio cliccare solo il  bottone devo usare stoop propagation
  }
  
  inputEvent(ev){
    this.testo =ev.targer.value ;
  }
}
