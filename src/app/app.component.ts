import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmilesApp';
  
   public choose ="";

  setvalue(drp:any)
  {
  this.choose=drp.target.value;
  }

}
class item {  
  name: string;  
  val: number;  
}  

