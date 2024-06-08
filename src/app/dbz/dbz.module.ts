import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './pages/dbz.component';
import { ListComponent } from './components/list/list.component';
import { DbzCharaterComponent } from './components/addcharater/dbz-charater.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
  DbzComponent,
  ListComponent,
  DbzCharaterComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports:[
    DbzComponent
  ]
})
export class DbzModule { }
