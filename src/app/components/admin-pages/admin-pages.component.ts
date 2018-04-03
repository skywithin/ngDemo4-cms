import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.css']
})
export class AdminPagesComponent implements OnInit {

  pages: any;
  successMsg: boolean = false;
  displayMsgTimeout: number = 2000;
  
  constructor(
    private router: Router,
    private pageService: PageService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("user") !== '"admin"') {
      this.router.navigateByUrl('');
    } 
    
    this.pages = this.pageService.pagesBS;
  }

  deletePage(id) {
    if (confirm('Confirm deletion')) {

      console.log("deleting page id " + id)
      this.pageService.deletePage(id).subscribe(response => {
        
          this.successMsg = true;
          setTimeout(function() {
            this.successMsg = false;
          }.bind(this), this.displayMsgTimeout)

          this.pageService.getPages().subscribe(pages => {
            this.pageService.pagesBS.next(pages);
          });
      });
    } else {
      console.log('Form is not valid.')
    }
  }
}
