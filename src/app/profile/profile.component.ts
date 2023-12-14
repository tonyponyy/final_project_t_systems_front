import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [LateralBarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(public tokenService:TokenService){}
  protected profile: any;

  ngOnInit():void {
    this.profile=this.tokenService.getUser();
    console.log(this.profile);
  }
}
