import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { contentRoutes } from './shared/routes/content.routes';
import { AuthGuard } from './components/auth/auth.guard';

const routes: Routes = [
  // AuthGuard
  { path: '', component: LayoutComponent, children: contentRoutes , canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
