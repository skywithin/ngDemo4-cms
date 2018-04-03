import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../services/page.service';

declare var CKEDITOR: any;

@Component({
  selector: 'app-admin-add-page',
  templateUrl: './admin-add-page.component.html',
  styleUrls: ['./admin-add-page.component.css']
})
export class AdminAddPageComponent implements OnInit {

  successMsg: boolean = false;
  errorMsg: boolean = false;
  displayMsgTimeout: number = 2000;
  title: string;
  content: string;
  

  constructor(
    private router: Router,
    private pageService: PageService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("user") !== '"admin"') {
      this.router.navigateByUrl('');
    } else {
      CKEDITOR.replace("content");
    }
  }

  addPage({form, value, valid}){
    if (valid) {
      value.content = CKEDITOR.instances.content.getData();

      this.pageService.postAddPage(value).subscribe(response => {
        if (response == 'pageExists') {
          this.errorMsg = true;
          setTimeout(function() {
            this.errorMsg = false;
          }.bind(this), this.displayMsgTimeout)
        } else {
          // Success
          form.reset();
          this.successMsg = true;
          setTimeout(function() {
            this.successMsg = false;
          }.bind(this), this.displayMsgTimeout)

          // Clear editor
          CKEDITOR.instances.content.setData('');

          this.pageService.getPages().subscribe(pages => {
            this.pageService.pagesBS.next(pages);
          });
        }
      });
    } else {
      console.log('Form is not valid.')
    }
  }

}
