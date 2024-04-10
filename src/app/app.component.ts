import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  skills = [
    {
      measure: 2,
      image: 'react.png',
      exp: '2 Years',
    },
    {
      measure: 1,
      image: 'angular.png',
      exp: '5 Months',
    },
    {
      measure: 3,
      image: 'node.png',
      exp: '2 Years',
    },
    {
      measure: 3,
      image: 'js.png',
      exp: '2 Years',
    },
    {
      measure: 3,
      image: 'ts.png',
      exp: '2 Years',
    }
  ]

  username = 'akicodeoficial'
}
