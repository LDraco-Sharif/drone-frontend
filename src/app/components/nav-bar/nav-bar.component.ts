import { Component, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
@Output() menuClickEvent = new EventEmitter<any>();

onMenuClick() {
  this.menuClickEvent.emit(null);
}
}
