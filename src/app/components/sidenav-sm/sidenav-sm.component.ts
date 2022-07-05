import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-sm',
  templateUrl: './sidenav-sm.component.html',
  styleUrls: ['./sidenav-sm.component.css']
})
export class SidenavSmComponent implements OnInit {

  @Input() boardName:string;
  @Input() userRole:string;

  constructor() {
    this.boardName = "";
    this.userRole = "";
   }

  ngOnInit(): void {
  }

}
