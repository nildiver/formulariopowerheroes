import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Charater } from '../../interfaces/charater.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public CharaterList:Charater[]=[
    {
        name:'Trunk',
        power:10
    }];

 @Output()
 public onDelete:EventEmitter <string>= new EventEmitter ();

  ondileteCharater(id?:string):void{
    if(!id)return;
 this.onDelete.emit(id);
  }
}
