import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { ThumbComponent } from './components/thumb/thumb.component';

@NgModule({
  declarations: [
    AppComponent,
    GallaryComponent,
    ThumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
