import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export interface Role {
  id: string;
  name: string;
  namePlural: string;
}
