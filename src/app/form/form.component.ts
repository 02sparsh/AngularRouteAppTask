import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit 
{

  constructor() { }

  ngOnInit(): void {}
  user:any={};

  submit()
  {
    alert(JSON.stringify(this.user));
    console.log(this.user);
  }

}
