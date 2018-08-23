import { Routes, RouterModule } from '@angular/router';

import { BootstrapComponent } from './components/test/bootstrap/bootstrap.component';
import { FontAwesomeComponent } from './components/test/font-awesome/font-awesome.component';
import { ToastrComponent } from './components/test/toastr/toastr.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'bootstrap', component: BootstrapComponent },
    { path: 'font-awesome', component: FontAwesomeComponent },
    { path: 'toastr', component: ToastrComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);
