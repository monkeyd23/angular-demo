import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'my-home',
    templateUrl: './app/home.component.html',
    styleUrls: [
      'app/home.component.css'
    ]
})

export class HomeComponent extends OnInit {


  ngOnInit(){
    console.log('here in Home component')
  }

}