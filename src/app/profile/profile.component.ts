import { Component, EventEmitter, Output } from '@angular/core';
import { LateralBarComponent } from '../lateral-bar/lateral-bar.component';
import { RequestService } from '../service/request.service';
import { ImageService } from '../service/image.service';
import { InterviewSkillsComponent } from '../modals/interview-skills/interview-skills.component';
import { TokenService } from '../service/token.service';
import { FileserviceService } from '../service/fileservice.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [LateralBarComponent, ReactiveFormsModule, InterviewSkillsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  skillsa: any[]=[];
  user:any;
  commentForm: FormGroup;
  constructor(public request:RequestService, public iservice:ImageService, public t_service: TokenService, public f_service :FileserviceService, private router: Router, private formBuilder: FormBuilder
    ) {
      this.commentForm = this.formBuilder.group({
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        lastname2: ['', Validators.required]
      });
    }

  protected profile: any;
  protected file_validation: boolean = true;
  protected class :string[] = ["is-success","is-primary","is-link","is-info","is-warning","is-danger"];
  protected selectedFile: any ;
  protected resume :any;
  protected current_role :string ="";
  protected resume_succes :boolean = false;

  ngOnInit():void {
    this.request.get_user().subscribe((data:any)=>{
      this.current_role = this.t_service.getUser();
      console.log(this.current_role)
      this.user = data;
      this.commentForm.value.name = this.user.name;
      this.commentForm.value.lastname = this.user.lastname;
      this.commentForm.value.lastname2 = this.user.lastname2;
      this.skillsa=data.skills;
      if (this.user.resume !=null){
        this.resume = this.user.resume.resume
      }

    },error =>{
      console.log("error")
    });
  }

  upload_resume(event :any){
    this.selectedFile = event.target.files[0]
    console.log(event.target.files[0].name)
    let file_extension = event.target.files[0].name.split(".")[1].toUpperCase()
    if (file_extension == "PDF"){
    this.file_validation = true;
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
      this.request.upload_resume(this.selectedFile).subscribe(
        (res) => {
          this.resume_succes = true
        },
        (err) => {
          console.log("error-->"+err)
        })
      }else{
        this.file_validation = false;
      }
  }

  view_resume(){
    this.f_service.get_base64_file(this.resume,"resume.pdf")
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

  onSubmit() {
    if(this.commentForm){
      console.log(this.commentForm)
      this.user.name = this.commentForm.value.name;
      console.log(this.commentForm.value.name)
      this.user.lastname = this.commentForm.value.lastname;
      this.user.lastname2 = this.commentForm.value.lastname2;
    }
    this.request.edit_user(this.user, this.user.id).subscribe(
      (data: any)=>{
        console.log('entra');
        
      },
      (error)=>{
        console.log('error' + error);
      }) 
  }
}
