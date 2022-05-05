import { Component, VERSION } from '@angular/core';
import { UselessFactsApiService } from './uselessfacts-api.service';

interface UselessFacts {
  reference: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  clockdata = ""
  clockHandle;
  response: UselessFacts;
 

  ngOnInit(){
    this.clockHandle = setInterval(()=> {
      this.clockdata = new Date().toLocaleString();
    }, 1000);
  }

 
}
