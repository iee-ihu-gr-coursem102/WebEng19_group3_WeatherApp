import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthPage } from './auth/auth.page';
import { HomePage } from './home/home.page';
import { AuthGuard } from './auth/auth.guard';
import { SearchPage } from './search/search.page';
import { FavoritePage } from './favorite/favorite.page';
import { UserSettingsPage } from './user-settings/userSettings.page';

const routes: Routes = [{
  path: '',
  redirectTo: 'auth',
  pathMatch: 'full'
},
{
  path: 'auth',
  component: AuthPage
},
{
  path: 'home',
  component: HomePage,
  canActivate: [AuthGuard]
},
{
  path: 'search',
  component: SearchPage,
  canActivate: [AuthGuard]
},
{
  path: 'favorite',
  component: FavoritePage,
  canActivate: [AuthGuard]
},
{
  path: 'user-settings',
  component: UserSettingsPage,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
