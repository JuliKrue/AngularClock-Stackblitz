import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { UselessFactsApiService } from './uselessfacts-api.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, ButtonComponent],
  providers: [UselessFactsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
