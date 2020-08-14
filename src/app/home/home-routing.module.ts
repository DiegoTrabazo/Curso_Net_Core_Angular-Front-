import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeContainerComponent } from './home-container.component';
import { HomeAltComponent } from './home-alt/home-alt.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeContainerComponent, 
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home2',
        component: HomeAltComponent
      }
    ]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule { }
