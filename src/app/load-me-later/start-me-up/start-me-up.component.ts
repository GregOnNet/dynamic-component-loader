import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-start-me-up',
  templateUrl: './start-me-up.component.html',
  styleUrls: ['./start-me-up.component.scss']
})
export class StartMeUpComponent implements OnInit, OnDestroy {
  destroy$$ = new Subject();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data
      .pipe(takeUntil(this.destroy$$))
      .subscribe(data => console.log('Resolved', data.resolvedRoles));

    this.route.queryParams
      .pipe(
        takeUntil(this.destroy$$),
        distinctUntilChanged((prev, next) => prev.city === next.city)
      )
      .subscribe(queryParams => console.log(queryParams));
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }
}
