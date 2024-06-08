import { Component } from '@angular/core';
import { Charater } from '../interfaces/charater.interface';
import { DbzService } from '../services/dbz-.service';


@Component({
  selector: 'app-page-dbz',
  templateUrl: './dbz.component.html',
  styleUrls: ['./dbz.component.css']
})
export class DbzComponent {
  constructor(private dbzService:DbzService){

  }
  get Charaters():Charater[] {
    return [...this.dbzService.Charaters];
  }
  onDeleteCharacter(id:string):void{
   this.dbzService.DeletecharterById(id);
  }
  onCharatecter(Charater:Charater):void{
    this.dbzService.addCharacter(Charater);
  }
}
