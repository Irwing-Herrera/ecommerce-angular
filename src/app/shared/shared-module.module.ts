import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnCircleComponent } from './components/btn-circle/btn-circle.component';
import { BtnDescuentosComponent } from './components/btn-descuentos/btn-descuentos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { RaitingComponent } from './components/raiting/raiting.component';
import { CounterProductComponent } from './components/counter-product/counter-product.component';
import { CategoryComponent } from './components/category/category.component';



@NgModule({
  declarations: [
    BtnDescuentosComponent,
    BtnCircleComponent,
    NavbarComponent,
    CardProductComponent,
    RaitingComponent,
    CounterProductComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BtnDescuentosComponent,
    BtnCircleComponent,
    NavbarComponent,
    CardProductComponent,
    RaitingComponent,
    CounterProductComponent,
    CategoryComponent
  ]
})
export class SharedModuleModule { }
