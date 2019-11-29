import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public http: DataService) { }


  observable = new Observable(subscriber => {
    subscriber.next(
      {
        data: "this is supposed to be the actual result I want to send to my subscribers",
        meta: {}
      }
    );

    subscriber.complete();
  });

  httpget() {
    this.http.ping().subscribe((x) => { console.log(x) })
    // this.observable.subscribe((x) => { console.log(x) })
  }
  httppost() {
    console.log("hit!");
    this.http.test().subscribe((x) => { console.log(x) })
    // this.observable.subscribe((x) => { console.log(x) })
  }
  ngOnInit() {
  }

}
