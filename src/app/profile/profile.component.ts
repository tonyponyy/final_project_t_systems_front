import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [LateralBarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user:any;
  constructor(public request:RequestService){}
  protected profile: any;

  ngOnInit():void {
    this.request.get_user().subscribe((data:any)=>{
      this.user = data;
      console.log(data);
    },error =>{
      console.log("error")
    });
    
  }
}
