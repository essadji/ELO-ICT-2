import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  show:boolean=true;
  list:Array<string>=[];
  // vari:any = bla.bla || ""
  hideGraphic(){
    let messageIn = "Now you see me.";
    let messageOut = "Now you don't.";
    if(this.list.length==0){messageOut="I'm outta here!"}
    if(this.show){this.list.push(messageOut)}else{this.list.push(messageIn)}
    this.show=!this.show;
    // alert(`test: ${this.show}`);
  }
}
