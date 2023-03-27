import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CommentBoxComponent} from "./comment-box/comment-box.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [AppComponent, CommentBoxComponent, CommentBoxComponent,  ],
  imports: [BrowserModule, FormsModule , HttpClientModule],
  providers: [],
  bootstrap: [AppComponent, CommentBoxComponent]
})
export class AppModule {}
