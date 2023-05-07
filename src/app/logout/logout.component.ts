import { Component, OnInit } from '@angular/core';
import { HardCodedAuthServiceService } from '../service/hard-coded-auth-service.service';
import { BasicdAuthServiceService } from '../service/basic-auth-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private hardCodedAuthServiceService:HardCodedAuthServiceService, private basicdAuthServiceService:BasicdAuthServiceService){

  }

  ngOnInit(): void {
    this.hardCodedAuthServiceService.logout() 
    this.basicdAuthServiceService.logout()
  }
}
