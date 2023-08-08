import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataListComponent } from './data-list/data-list.component';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent
    },
  
    {
    path: 'api', 
    component: DataListComponent 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
