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
        console.log("bien")
        },
        (err) => {
          console.log("problemon-->"+err)
        })
  }
}
