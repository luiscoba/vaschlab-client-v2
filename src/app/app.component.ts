import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'vaschlab-client-v2';
  isCollapsed = true;

  toggleMenu(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
