import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  clockdata = ""
  clockHandle;
 

  ngOnInit(){
    this.clockHandle = setInterval(()=> {
      this.clockdata = new Date().toLocaleString();
    }, 1000);
  }
}
