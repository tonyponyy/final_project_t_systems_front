import { Injectable } from '@angular/core';

const IMG_KEY='img_profile';

@Injectable({
  providedIn: 'root'
})

export class ImageService {


  
  constructor() { }

  public destroy_image(){
    window.sessionStorage.removeItem(IMG_KEY);
  }
  public save_image(image : string) : void{
    window.sessionStorage.removeItem(IMG_KEY);
    window.sessionStorage.setItem(IMG_KEY, image);
  }

  public get_image() : string | null {
    return window.sessionStorage.getItem(IMG_KEY);
  }


}
