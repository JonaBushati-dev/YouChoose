import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() inputChange = new EventEmitter();
  nullVal:null;
  constructor() { }

  ngOnInit(): void {
  }

postData(event: any) {
  this.inputChange.emit(event.target.value);
  if(event.target.value=="") {
    this.inputChange.emit(this.nullVal);
  }
  console.log(event.target.value)
}
}


   