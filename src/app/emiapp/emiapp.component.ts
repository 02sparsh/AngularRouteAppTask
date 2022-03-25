import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emiapp',
  templateUrl: './emiapp.component.html',
  styleUrls: ['./emiapp.component.css']
})
export class EmiappComponent implements OnInit 
{
  p:number=0;
  r:number=0;
  t:number=0;
  rate:number=0;
  totamt:number=0;
  totint:number=0;
  funcrate:number=0;
  cmpdnum:number=0;
  cmpddeno:number=0;
  constructor() { }

  ngOnInit(): void {}


  emicalc()
  {
    this.rate=this.r/1200;
    this.funcrate=1+this.rate;
    this.cmpdnum=Math.pow(this.funcrate,this.t);
    this.cmpddeno=Math.pow(this.funcrate,this.t)-1;
    this.totint=this.p*this.rate*(this.cmpdnum/this.cmpddeno);
    this.totamt=this.totint*12;
  }
}