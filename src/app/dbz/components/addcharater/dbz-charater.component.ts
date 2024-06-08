import { Component, EventEmitter, Output } from '@angular/core';
import { Charater } from '../../interfaces/charater.interface';

@Component({
  selector: 'dbz-add-charater',
  templateUrl: './dbz-charater.component.html',
  styleUrls: ['./dbz-charater.component.css']
})
export class DbzCharaterComponent {
 //emitir un nuevo objeto
 @Output()
onNewcharater:EventEmitter <Charater> = new EventEmitter();

  public charater:Charater = {
    name:'',
    power:0
  }

  emitCharater():void{
   if(this.charater.name.length === 0) return;

   this.onNewcharater.emit(this.charater)

    this.charater= {name:'',power:0}; // reinicia el power y el nombre

  }
}
