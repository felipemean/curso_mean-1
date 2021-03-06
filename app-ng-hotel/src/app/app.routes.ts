import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch:"full"},
    { path: 'home', component: HomeComponent},
    { path: 'admin', component: AdminComponent}
]
