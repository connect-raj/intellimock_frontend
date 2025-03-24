import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InterviewCompComponent } from './components/interview-comp/interview-comp.component';
import { QuestionComponentComponent } from './components/question-component/question-component.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: HomeComponent
},{
    path: 'questions',
    pathMatch: 'full',
    component: QuestionComponentComponent
},{
    path: 'interviews',
    component: InterviewCompComponent
},{
    path:"login",
    component: LoginComponent,
    data: {
        'formType':'Login'
    }
},{
    path:"signup",
    component: LoginComponent,
    data: {
        'formType':'Sign up'
    }
}];
