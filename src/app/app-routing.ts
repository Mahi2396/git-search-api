import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyGitComponentComponent } from './my-git-component/my-git-component.component';
import { MyGitDetailComponentComponent } from './my-git-detail-component/my-git-detail-component.component';


// import { MyGitSearchComponentComponent } from './my-git-search-component/my-git-search-component.component';
const AppRoutes: Routes = [
 
  { path: '',  component: MyGitComponentComponent },
  { path: 'gitUserDeatil/:id',  component: MyGitDetailComponentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/