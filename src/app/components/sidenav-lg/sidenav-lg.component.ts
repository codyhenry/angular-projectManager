import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-lg',
  templateUrl: './sidenav-lg.component.html',
  styleUrls: ['./sidenav-lg.component.css']
})
export class SidenavLgComponent implements OnInit {

  @Input() boardName:string;
  @Input() userRole:string;

  constructor() {
    this.boardName = "";
    this.userRole = "";
   }

  ngOnInit(): void {
  }

}
