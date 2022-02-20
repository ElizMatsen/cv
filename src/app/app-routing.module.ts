import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  // {
  //   path: '404',
  //   component: NotFoundComponent,
  // },
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
