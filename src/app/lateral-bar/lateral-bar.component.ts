import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TokenService } from '../service/token.service';
import { RequestService } from '../service/request.service';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-lateral-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './lateral-bar.component.html',
  styleUrl: './lateral-bar.component.css'
})
export class LateralBarComponent {
  protected role : string | null = '';
  protected image :string | null = '';
  constructor(public tokenService:TokenService,public http:RequestService,public iservice: ImageService){}

  ngOnInit() {
    this.role = this.tokenService.getUser();
    this.get_image()
  }

  singOut(){
    console.log("me desconecto");
    this.tokenService.singOut();
  }

  get_image(){
    this.image = this.iservice.get_image();
    console.log("peticion 0")
    if (this.image == null){
      this.http.get_user().subscribe((data:any)=>{
        if (data.photo == null){
          this.image ="default_image"
        }else{
          this.iservice.save_image(data.photo);
          this.image = data.photo;
        }
        console.log("peticion 1")
      },error =>{
        console.log("error")
      });
    }
  }
}
