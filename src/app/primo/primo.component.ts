import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss']
})
export class PrimoComponent implements OnInit {
  
  title = 'DemoBergamo';

  HTMLString='<div><p>Prova</p></div>';
  linkUrl="https://google.it";

  @Input()
  titoloInput: string;

  constructor() { }

  ngOnInit(): void {
  }

}
