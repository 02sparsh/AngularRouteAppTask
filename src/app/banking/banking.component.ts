import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit 
{
  initial:number=0;
  bal:number=0;
  deposited:number=0;
  total:number=0;
  withdraw:number=0;
  result:number=0;
  constructor() { }

  ngOnInit(): void {}
  createAcc()
    {
      if(this.initial<5001)
      {
        alert("Please enter more money");
      }
      else
      {
        this.result=this.initial;
        alert("Account Created");
      }
    }
    depositmoney()
    {   
        this.result=this.deposited+this.result;
        alert("Money Added");
    }
    withdrawmoney()
    {
        if(this.withdraw>this.result)
        {
            alert("Insufficient balance");
        }
        else
        {
            this.result=this.result-this.withdraw;
            alert("Money Withdraw");
        }
    }
}
