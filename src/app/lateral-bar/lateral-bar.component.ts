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
  protected role : string | null = '';
  constructor(public tokenService:TokenService){}

  ngOnInit() {
    console.log(this.tokenService.getUser());
    this.role = this.tokenService.getUser();
  }

  singOut(){
    console.log("me desconecto");
    this.tokenService.singOut();
  }
}
