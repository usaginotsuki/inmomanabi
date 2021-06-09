import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PortoviejoCityComponent } from './portoviejo-city/portoviejo-city.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'portoviejo', component: PortoviejoCityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
