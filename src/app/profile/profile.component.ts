import { Component, EventEmitter, Output } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { RequestService } from '../service/request.service';
import { ImageService } from '../service/image.service';
import { InterviewSkillsComponent } from '../modals/interview-skills/interview-skills.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [LateralBarComponent, InterviewSkillsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  skillsa: any[]=[];
  user:any;
  constructor(public request:RequestService, public iservice:ImageService){}
  protected profile: any;
  protected class :string[] = ["is-success","is-primary","is-link","is-info","is-warning","is-danger"];
  protected selectedFile: any ;

  ngOnInit():void {
    this.request.get_user().subscribe((data:any)=>{
      this.user = data;
      this.skillsa=data.skills;
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
  recibirArray(array: any[]){
    for (let index = 0; index < array.length; index++) {
      this.skillsa.push(array[index])
      
    }
    this.skillsa=[... new Set(this.skillsa)]
    console.log(this.skillsa)
  }
}
// export interface user{
//   id: number;
//   name: string;
//   lastname: string;
//   lastname2: string;
//   email: string;
//   password: string;
//   photo: string;
//   resume: string;
//   role: {
//     id : number;
//     name: string;
//   }
//   skills: [];
// }