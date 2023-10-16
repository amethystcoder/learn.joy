import { Component, OnInit } from '@angular/core';
import { UsergetputService } from '../usergetput.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  constructor(private usergetputservice:UsergetputService) { }

  ngOnInit(): void {
    this.usergetputservice.is_login_otherwise_logout()
    scrollTo({top:0})
  }

}
