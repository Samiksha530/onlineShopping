import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { contentRoutes } from './shared/routes/content.routes';

const routes: Routes = [
  // AuthGuard
  { path: '', component: LayoutComponent, children: contentRoutes }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
