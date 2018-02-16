import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { MyGitComponentComponent } from './my-git-component/my-git-component.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MyGitDetailComponentComponent } from './my-git-detail-component/my-git-detail-component.component';


@NgModule({  
  declarations: [
    
    AppComponent,
    
    MyGitComponentComponent,
    MyGitDetailComponentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
