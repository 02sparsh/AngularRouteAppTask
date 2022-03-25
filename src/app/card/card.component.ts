import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit 
{
  status:string=''
  salary:number=0;
  constructor() { }

  ngOnInit(): void {}

  compute(){
    if(this.salary<20000)
    {
      this.status="No Card for U :P";
    }
    else if(this.salary>=20000 && this.salary<30000)
    {
      this.status="Silver Card";
    }
    else if(this.salary>=30000 && this.salary<40000)
    {
      this.status="Gold Card";
    }
    else{
      this.status="Platinum Card"
    }
  }

}
