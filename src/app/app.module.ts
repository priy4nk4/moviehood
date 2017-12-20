import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpModule} from '@angular/http';
import { DetailComponent } from './detail/detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SearchdataComponent } from './searchdata/searchdata.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    NavbarComponent,
    SearchdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
       RouterModule.forRoot([
      { path : '',component : HomeComponent },
      { path : 'movie/:id', component : DetailComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
