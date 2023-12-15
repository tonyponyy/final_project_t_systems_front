import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-lateral-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './lateral-bar.component.html',
  styleUrl: './lateral-bar.component.css'
})
export class LateralBarComponent {
  protected role = "user"
  constructor(public tokenService:TokenService){}

  singOut(){
    console.log("me desconecto");
    this.tokenService.singOut();
  }
}
