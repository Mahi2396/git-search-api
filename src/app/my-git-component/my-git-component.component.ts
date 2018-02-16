import { Component, OnInit } from '@angular/core';
import { MyGitServiceService } from "../my-git-service.service";
@Component({
  selector: 'app-my-git-component',
  templateUrl: './my-git-component.component.html',
  providers: [MyGitServiceService],
  styleUrls: ['./my-git-component.component.css']
})
export class MyGitComponentComponent implements OnInit {
  gitusername: any;
  isProfile: boolean;
  profile = {};
  myRepoList = {};
  myCommitListMsg = {};
  modal: any;
  alertStyles = {};
  loadingStyle = { 'display': 'none' };
  username: any;
  param: any;
  constructor(public apiSerivce: MyGitServiceService) { }

  ngOnInit() { }

  /*
    Method getPullList
    param data,test
  */
  getPullList(data, test) {
    this.username=test;
    this.loadingStyle = { 'display': 'block' };
    this.loadUser(this.username);
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
      username: this.username, fileName: objectClicked
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

}
