import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  Nombre:string="HERNAN SARMIENTO";
  Titulo:string="FULLSTACK DEVELOPER JR"
  constructor() { }

  ngOnInit(): void {
  }

}
