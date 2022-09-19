import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'antrag',
    loadChildren: () => import('./antrag-edit/antrag-edit.module').then( m => m.AntragEditPageModule)
  },
  {
    path: 'fish-detail/:fishTypeId',
    loadChildren: () => import('./fish-detail/fish-detail.module').then( m => m.FishDetailPageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'decision-board',
    loadChildren: () => import('./decision-board/decision-board.module').then( m => m.DecisionBoardPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
