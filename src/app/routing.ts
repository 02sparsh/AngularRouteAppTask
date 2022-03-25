import { Routes } from "@angular/router";
import { BankingComponent } from "./banking/banking.component";
import { CardComponent } from "./card/card.component";
import { EmiappComponent } from "./emiapp/emiapp.component";
import { FormComponent } from "./form/form.component";

export const routes: Routes=[
    {path:'form',component:FormComponent},
    {path:'banking',component:BankingComponent},
    {path:'card',component:CardComponent},
    {path:'emiapp',component:EmiappComponent},
];
