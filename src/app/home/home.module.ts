import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './/home-routing.module';
import { HomeContainerComponent } from './home-container.component';
import { HomeAltComponent } from './home-alt/home-alt.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent, HomeContainerComponent, HomeAltComponent]
})
export class HomeModule { }
