import { HeaderComponent } from './header/header.component';
import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Route[] = [

    {
        path: '',   
        component: HeaderComponent
    },
   
    {
        path: ':FieldValue',
        component: HeaderComponent
    },
    
]