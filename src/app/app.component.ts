import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'MoveSmooth';
  exercises = [];
  selectedId = 0;

  constructor(private router: Router) {
                this.router = router;
  }
}
