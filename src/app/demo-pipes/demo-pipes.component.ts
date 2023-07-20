import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipes',
  templateUrl: './demo-pipes.component.html',
  styleUrls: ['./demo-pipes.component.css']
})
export class DemoPipesComponent implements OnInit {

  constructor() { }
  // title="Bangalore"
  // today=Date();
  ngOnInit(): void {
  }
  user={
    id : 100,
    name:"Steve",
    DOB :'10-10-2020',
    Salary:344343

  }
}
