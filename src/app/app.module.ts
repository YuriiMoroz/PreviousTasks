import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CenzorComponent } from './work/cenzor/cenzor.component';
import { UserlistComponent } from './work/userlist/userlist.component';
import { TasklistComponent } from './work/tasklist/tasklist.component';
import { WorkComponent } from './work/work.component';
import { ChildComponent } from './work/tasklist/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CenzorComponent,
    UserlistComponent,
    TasklistComponent,
    WorkComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
