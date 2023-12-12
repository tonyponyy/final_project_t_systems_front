import { Component } from '@angular/core';
import { LateralBarComponent } from "../lateral-bar/lateral-bar.component";

@Component({
    selector: 'app-admin-view',
    standalone: true,
    templateUrl: './admin-view.component.html',
    styleUrl: './admin-view.component.css',
    imports: [LateralBarComponent]
})
export class AdminViewComponent {
  protected items = [1,2,3,4,5,6,7,8,9,10,11,12]

}
