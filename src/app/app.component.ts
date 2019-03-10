import { Component } from '@angular/core';
import{ NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @select() counter;
  
  constructor(private ngRedux: NgRedux<IAppState>){
    // var subscription = ngRedux.subscribe(() =>{
    //   var store = ngRedux.getState();
    //   this.counter = store.counter;
    // });
  }

  increment(){
    // this.counter++;
    this.ngRedux.dispatch({type: INCREMENT});
  }
}
