import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
  adm(){
    this.router.navigate(["/adm"]);
  }
  ds(){
    this.router.navigate(["/ds"]);
  }
  enfermagem(){
    this.router.navigate(["/enfermagem"]);
  }
  contabilidade(){
    this.router.navigate(["/contabilidade"]);
  }
  juridicos(){
    this.router.navigate(["/juridicos"]);
  }
  logistica(){
    this.router.navigate(["/logistica"]);
  }
  seguranca(){
    this.router.navigate(["/seguranca"]);
  }
  emds(){
    this.router.navigate(["/emds"]);
  }
  emadm(){
    this.router.navigate(["/emadm"]);
  }
}
