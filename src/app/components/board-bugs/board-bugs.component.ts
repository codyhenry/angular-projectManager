import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-bugs',
  templateUrl: './board-bugs.component.html',
  styleUrls: ['./board-bugs.component.css']
})
export class BoardBugsComponent implements OnInit {

  isLoadingResults: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
