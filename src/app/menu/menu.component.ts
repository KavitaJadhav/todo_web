import { Component, OnInit } from '@angular/core';
import { HardCodedAuthServiceService } from '../service/hard-coded-auth-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  constructor(private hardCodedAuthServiceService:HardCodedAuthServiceService){

  }
  
  ngOnInit(): void {
  }

  public isUserloggedIn(){
    return this.hardCodedAuthServiceService.isUserloggedIn();
  }
}
