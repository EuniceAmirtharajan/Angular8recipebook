import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicked=false;
  count=0;
  countArray=[];
 
showDetails(){
 
  this.clicked=true;
  this.countArray.push(this.count++);

}
}
