import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Charater } from '../interfaces/charater.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public Charaters:Charater[]=[{
    id:uuid(),
    name:'Krillin',
    power:1100
  },
  {
    id:uuid(),
   name:'Goku',
   power:9500
  },
  {
    id:uuid(),
   name:'Vegeta',
   power:7500
  }
 ];
 addCharacter( Charater:Charater):void{
  const newCharacter:Charater={ id:uuid(),...Charater  };

   this.Charaters.push(Charater);
 }

//  onDeletecharter(index:number){
  // this.Charaters.splice(index,1)
//  }
DeletecharterById(id:string){
  this.Charaters=this.Charaters.filter(Charater => Charater.id !==id);
  }
}
