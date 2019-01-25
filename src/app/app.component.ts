import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DynamicComponentLoader } from './dynamic-component-loader/dynamic-component-loader.service';
import { DialogComponent } from './dynamic-modules/dialog/dialog.component';
import { MessageComponent } from './dynamic-modules/message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('testOutlet', { read: ViewContainerRef })
  testOutlet: ViewContainerRef | undefined;

  constructor(
    private dynamicComponentLoader: DynamicComponentLoader,
    private dialog: MatDialog,
    // Don't do this at home
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/ditto/').subscribe();
  }

  loadComponent() {
    this.dynamicComponentLoader
      .getComponentFactory<MessageComponent>('message')
      .subscribe({
        next: componentFactory => {
          if (!this.testOutlet) {
            return;
          }

          const ref = this.testOutlet.createComponent(componentFactory);
          ref.changeDetectorRef.detectChanges();
        },
        error: err => {
          console.warn(err);
        }
      });
  }

  showDialog() {
    this.dialog.open(DialogComponent);
  }
}
