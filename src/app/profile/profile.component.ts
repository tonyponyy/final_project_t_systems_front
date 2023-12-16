import { Component } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { RequestService } from '../service/request.service';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [LateralBarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user:any;
  constructor(public request:RequestService, public iservice:ImageService){}
  protected profile: any;
  protected selectedFile: any ;

  ngOnInit():void {
    this.request.get_user().subscribe((data:any)=>{
      this.user = data;
      console.log(data);
    },error =>{
      console.log("error")
    });
  }
  upload_image(event :any){
    this.selectedFile = event.target.files[0]
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);

      this.request.upload_photo(this.selectedFile).subscribe(
        (res) => {
          //añadir spinner ??
          this.request.get_user().subscribe((data:any)=>{
            this.user.photo = data.photo;
            this.iservice.save_image(data.photo);
          },error =>{
            console.log("error")
          });
        },
        (err) => {
          console.log("error-->"+err)
        })
  }
}
