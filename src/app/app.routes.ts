import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { InterviewComponent } from './interview/interview.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { NewInterviewComponent } from './new-interview/new-interview.component';
import { EditInterviewComponent } from './edit-interview/edit-interview.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'',
        component: LoginComponent
    },
    {
        path:'interview/:id',
        component: InterviewComponent
    },
    {
        path:'register',
        component: NewUserComponent
    },
    {
        path:'profile',
        component: ProfileComponent
    } ,
    {
        path:'admin',
        component: AdminViewComponent
    } ,
    {
        path:'new_interview',
        component: NewInterviewComponent
    } ,
    {
        path:'edit_interview',
        component: EditInterviewComponent
    } ,
    {
        path:'**',
        component: NotFoundComponent
    },
    
];
