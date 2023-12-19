import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
}
