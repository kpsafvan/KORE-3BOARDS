import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Innovative";
  btnclick(){
    const myserv = new myservice();
    myserv.onclickbtn(this.title);
  }

}
