import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  userRank: string = 'Admin'; //get from db match userId with rank in board
  constructor() { }

  ngOnInit(): void {
  }

}
