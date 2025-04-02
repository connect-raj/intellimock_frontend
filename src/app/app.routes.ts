import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./components/home/home.component').then(ho=> ho.HomeComponent)
},{
    path: 'questions',
    pathMatch: 'full',
    loadComponent: () => import('./components/question-component/question-component.component').then(qu => qu.QuestionsComponent)
},{
    path: 'interviews',
    loadComponent: () => import('./components/interview-section/interview-section.component').then(i => i.InterviewSectionComponent)           
},{
    path:"login",
    loadComponent: () => import('./components/login/login.component').then(lo => lo.LoginComponent),
    data: {
        'formType':'Login'
    }
},{
    path:"register",
    loadComponent: () => import('./components/login/login.component').then(si => si.LoginComponent),
    data: {
        'formType':'Register'
    }
},
{
    path: "interviews/Mock-Interview",
    loadComponent: () => import('./components/mock-interview/mock-interview.component').then(mi => mi.MockInterviewComponent)
},{
    path: "interviews/Coding-Interview",
    loadComponent: () => import('./components/code-interview/code-interview.component').then(ci => ci.CodeInterviewComponent)
},{
    path: "interviews/Mock-Interview/:id",
    loadComponent: () => import('./components/mock-interview-page/mock-interview-page.component').then(mip => mip.MockInterviewPageComponent)
},{
    path: "interviews/Coding-Interview/:id",
    loadComponent: () => import('./components/mock-interview-page/mock-interview-page.component').then(mip => mip.MockInterviewPageComponent)
}
];
