import 'rxjs/add/operator/switchMap';
import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MyGitServiceService } from "../my-git-service.service";
@Component({
  selector: 'app-my-git-component',
  templateUrl: './my-git-component.component.html',
  providers: [MyGitServiceService],
  styleUrls: ['./my-git-component.component.css']
})
export class MyGitComponentComponent implements OnInit {
  gitusername: any;
  
  searchResults:{};
  username:any;
  loadingStyle = { 'display': 'none' };
  
 
 
  modal: any;
 
  
  
  constructor(public apiSerivce: MyGitServiceService,
    public router: Router) { }

  ngOnInit() { }

 


 getGitUserSearch(usernameObject)
 {
 
   this.apiSerivce.getUserSearch(usernameObject).subscribe(data => {
    
     this.searchResults = data.items;
     this.loadingStyle = { 'display': 'none' };
   });
 }

  
  /*
    Method getPullList
    param data,test
  */
 getPullList(data, test) {
  this.username=test;
  this.loadingStyle = { 'display': 'block' };
 
  this.getGitUserSearch(this.username);
}
  

  

  

}
