import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'home/news', redirectTo: 'news', pathMatch: 'full' },
  { path: 'home/home', redirectTo: 'home', pathMatch: 'full' },
  { path: 'news/home', redirectTo: 'home', pathMatch: 'full' },
  { path: 'news/news', redirectTo: 'news', pathMatch: 'full' },
  {
     path: 'home',
     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
     canActivate: [AuthGuard],
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'my-modal', loadChildren: './modals/my-modal/my-modal.module#MyModalPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
