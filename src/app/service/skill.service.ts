import { Injectable } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { ModalSkillService } from './modal-skill.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private modalSkill: ModalSkillService) {}

  metodoDeOtraClase() {
    this.modalSkill.triggerSkillAdded();
  }
}
