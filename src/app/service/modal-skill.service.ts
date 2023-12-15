import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalSkillService {
  private skillAddedSource = new Subject<void>();

  skillAdded$ = this.skillAddedSource.asObservable();

  triggerSkillAdded() {
    this.skillAddedSource.next();
  }
}
