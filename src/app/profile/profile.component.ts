import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { TemplateComponent } from '../template/template.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [LateralBarComponent,TemplateComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
