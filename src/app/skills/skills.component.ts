import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { SkillComponent } from '../skill/skill.component';
import { SkillModalComponent } from '../modals/skill-modal/skill-modal.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LateralBarComponent, SkillComponent,SkillModalComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
