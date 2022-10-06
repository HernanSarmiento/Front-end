import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
    titulo:Array<any>=[
      {grado:"SECUNDARIA" ,nombre:"IEA", anio:"2018"},
      {grado:"CERTIFICADO INGLES" ,nombre:"CAMBRIDGE ESOL Entry 3", anio:"2013"},
      {grado:"Udemy" ,nombre:"Master Javascript,Angular,NodeJs", anio:"2022"},

    ]
  constructor() { }

  ngOnInit(): void {
  }

}
