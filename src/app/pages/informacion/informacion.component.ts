import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/auth/database.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {

  constructor(private router: Router, private dbService: DatabaseService) { }

  ngOnInit(): void {
  }

  verInicio(){
    this.router.navigate(["inicio"]);
  }

  crear(){
    this.dbService.crearToken();
  }

  eliminar(){
    this.dbService.eliminarToken();
  }

}
