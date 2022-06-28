import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  userRole: string = 'Admin'; //get from db match userId with rank in board
  boardName: string = 'Test Board';
  constructor() { }

  ngOnInit(): void {
  }

}
