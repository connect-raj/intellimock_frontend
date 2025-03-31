import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
},{
    path: 'questions',
    pathMatch: 'full',
    loadComponent: () => import('./components/question-component/question-component.component').then(m => m.QuestionsComponent)
},{
    path: 'interviews',
    loadComponent: () => import('./components/interview-section/interview-section.component').then(m => m.InterviewSectionComponent)           
},{
    path:"login",
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent),
    data: {
        'formType':'Login'
    }
},{
    path:"signup",
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent),
    data: {
        'formType':'Sign up'
    }
},
{
    path: "interviews/Mock-Interview",
    loadComponent: () => import('./components/mock-interview/mock-interview.component').then(m => m.MockInterviewComponent)
},{
    path: "interviews/Coding-Interview",
    loadComponent: () => import('./components/code-interview/code-interview.component').then(m => m.CodeInterviewComponent)
}
];
