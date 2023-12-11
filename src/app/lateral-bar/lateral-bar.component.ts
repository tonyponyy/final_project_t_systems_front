import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateComponent } from '../template/template.component';

@Component({
  selector: 'app-lateral-bar',
  standalone: true,
  imports: [RouterOutlet, TemplateComponent],
  templateUrl: './lateral-bar.component.html',
  styleUrl: './lateral-bar.component.css'
})
export class LateralBarComponent {

}
