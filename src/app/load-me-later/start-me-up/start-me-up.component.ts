import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start-me-up',
  templateUrl: './start-me-up.component.html',
  styleUrls: ['./start-me-up.component.scss']
})
export class StartMeUpComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data =>
      console.log('Resolved', data.resolvedRoles)
    );
  }
}
