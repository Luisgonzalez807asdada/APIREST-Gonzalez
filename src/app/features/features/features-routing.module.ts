import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataListComponent } from 'src/app/data-list/data-list.component';
import { LoginComponent} from 'src/app/login/login.component';



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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,]
})
export class NombreDelModuloRoutingModule { }
