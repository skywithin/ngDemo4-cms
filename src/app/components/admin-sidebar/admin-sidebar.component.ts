import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  content: string;
  id: string;
  successMsg: boolean;
  displayMsgTimeout: number = 2000;
  
  constructor(
    private router: Router,
    private sidebarService: SidebarService
  ) { }

  ngOnInit() {
    this.sidebarService.getSidebar().subscribe(response => {
      this.content = response["content"];
      this.id = response["id"];
    });
  }

  editSidebar({value}){
    this.sidebarService.putEditSidebar(value).subscribe(response => {
      // Success
      this.successMsg = true;
      setTimeout(function() {
        this.successMsg = false;
      }.bind(this), this.displayMsgTimeout)
    });
  }

}
