import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppEventList } from './projects/listmod/event-list.component';
import { StanleyComponent } from './projects/stanley/stanley.component';
import { AdminPageComponent } from './projects/ta9/admin-page/admin-page.component';
import { Ta9Component } from './projects/ta9/ta9.component';
import { UserPageComponent } from './projects/ta9/user-page/user-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'stanley',component:StanleyComponent},
  {path:'ta9', component: Ta9Component, children:[
    {path:'', component: UserPageComponent},
    {path:'user', component: UserPageComponent},
    {path: 'admin', component: AdminPageComponent}
  ]},
  {path:'listMode',component:AppEventList}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
