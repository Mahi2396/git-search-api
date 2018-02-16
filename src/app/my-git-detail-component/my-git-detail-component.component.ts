import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MyGitServiceService } from "../my-git-service.service";
@Component({
  selector: 'app-my-git-detail-component',
  templateUrl: './my-git-detail-component.component.html',
  providers: [MyGitServiceService],
  styleUrls: ['./my-git-detail-component.component.css']
})
export class MyGitDetailComponentComponent implements OnInit {

  selectedProfile: any;
  isProfile: boolean;
  profile = {};
  myRepoList = {};
  loadingStyle = { 'display': 'none' };
  alertStyles = {};
  myCommitListMsg = {};
  param: any;
  username: any;
  constructor(public apiSerivce: MyGitServiceService, private router: Router, private route: ActivatedRoute) {
    
    this.route.params.subscribe(params => {
      this.selectedProfile = params['id']; // --> Name must match wanted parameter
    });

    this.loadUser(this.selectedProfile);
  }
  /*
    Method loadUser
    param usernameObject
  */
  loadUser(usernameObject) {

    this.apiSerivce.getUser(usernameObject).subscribe(data => {
      this.isProfile = true;
      this.profile = data;
      
      this.loadingStyle = { 'display': 'none' };
    });
    this.getRepoList(usernameObject);
  }
 
   /*
    Method getRepoList
    param usernameObject
  */
 getRepoList(usernameObject) {
  this.apiSerivce.getGitRepoList(usernameObject).subscribe(data => {
    this.myRepoList = data;

  });
}
 /*
    Method openDialog
    param objectClicked
  */
 openDialog(objectClicked) {
  this.alertStyles = {
    'display': 'block'
  };
  this.loadingStyle = { 'display': 'block' };
  this.param = {
    username: this.selectedProfile, fileName: objectClicked
  };
  this.apiSerivce.getGitCommitList(this.param).subscribe(data => {
    this.myCommitListMsg = data;
    this.loadingStyle = { 'display': 'none' };
  })
}
/*
    Method closePopUp
    param ''
  */
 closePopUp() {
  this.alertStyles = {
    'display': 'none'
  };
}
  ngOnInit() {
  }

}
