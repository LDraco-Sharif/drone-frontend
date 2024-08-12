import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BgVideoComponent } from "./components/bg-video/bg-video.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ContentComponent } from './components/content/content.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BgVideoComponent, NavBarComponent, ContentComponent, MatSidenavModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'drone-web';
}
