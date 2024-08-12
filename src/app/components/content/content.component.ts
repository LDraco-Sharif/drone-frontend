import { Component, ViewEncapsulation } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent {

  description: string = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem inventore harum, illo doloremque aliquid tempore id quidem sequi consequatur quisquam officia veniam sed recusandae libero dolorum quo et? Veritatis, soluta!`;
}
