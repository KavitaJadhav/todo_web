import { Component, OnInit } from '@angular/core';
import { HardCodedAuthServiceService } from '../service/hard-coded-auth-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private hardCodedAuthServiceService:HardCodedAuthServiceService){

  }

  ngOnInit(): void {
this.hardCodedAuthServiceService.logout()  }

}
