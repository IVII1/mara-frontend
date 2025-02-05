import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },{
        path: 'contact',
        component: ContactComponent 
    },
    {
        path: 'projects/:id',
        component: ProjectDetailComponent
    },
    
];
