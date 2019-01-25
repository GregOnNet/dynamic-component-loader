import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StartUpService {
  beforeStart(): Observable<string> {
    return timer(3000).pipe(mapTo('Setting up important things'));
  }
}
