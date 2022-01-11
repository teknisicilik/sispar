import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'analisa',
    loadChildren: () =>
      import('./pages/analisa/analisa.module').then((m) => m.AnalisaPageModule),
  },
  {
    path: 'perangkat-detail/:id',
    loadChildren: () =>
      import('./pages/perangkat-detail/perangkat-detail.module').then(
        (m) => m.PerangkatDetailPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
