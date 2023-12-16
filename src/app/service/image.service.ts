import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  public destroy_image(){
    window.sessionStorage.removeItem("img_profile");
  }
  public save_image(image : string) : void{
    window.sessionStorage.removeItem("img_profile");
    window.sessionStorage.setItem("img_profile", image);
  }

  public get_image() : string | null {
    return window.sessionStorage.getItem("img_profile");
  }


}
