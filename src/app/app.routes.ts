import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { InterviewComponent } from './interview/interview.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { NewInterviewComponent } from './new-interview/new-interview.component';
import { EditInterviewComponent } from './edit-interview/edit-interview.component';
import { SkillsComponent } from './skills/skills.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { MyInterviewsComponent } from './my-interviews/my-interviews.component';
import { InterviewHrComponent } from './interview-hr/interview-hr.component';
import { logedGuard } from './guards/loged.guard';
import { userRoleGuard } from './guards/user-role.guard';
import { userHrRoleGuard } from './guards/user-hr-role.guard';
import { adminRoleGuard } from './guards/admin-role.guard';
import { hrRoleGuard } from './guards/hr-role.guard';

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
        path:'myinterviews',
        component: MyInterviewsComponent,
        canActivate: [logedGuard,userRoleGuard]
    },
    {
        path:'interviews',
        component: InterviewsComponent,
        canActivate: [logedGuard,userHrRoleGuard]
    },
    {
        path:'interview/:id',
        component: InterviewComponent,
        canActivate: [logedGuard,userHrRoleGuard]
    },
    {
        path:'interview_hr/:id',
        component: InterviewHrComponent,
        canActivate: [logedGuard,HrRoleGuard]
    },
    {
        path:'register',
        component: NewUserComponent
    },
    {
        path:'profile',
        component: ProfileComponent,
        canActivate: [logedGuard]
    } ,
    {
        path:'admin',
        component: AdminViewComponent,
        canActivate: [logedGuard,adminRoleGuard]
    } ,
    {
        path:'new_interview',
        component: NewInterviewComponent,
        canActivate: [logedGuard,hrRoleGuard]
    } ,
    {
        path:'edit_interview',
        component: EditInterviewComponent,
        canActivate: [logedGuard]
    } ,
    {
        path:'skills',
        component: SkillsComponent,
        canActivate: [logedGuard,hrRoleGuard]
    },
    {
        path:'**',
        component: NotFoundComponent,
    },
    
];
