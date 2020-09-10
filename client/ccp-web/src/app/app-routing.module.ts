import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TributesComponent } from './tributes/tributes.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: LandingComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
