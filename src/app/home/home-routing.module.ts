import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { TabComponent } from './tab/tab.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
      },
      {
        path: 'controles',
        loadChildren: () => import('./controles/controles.module').then( m => m.ControlesPageModule)
      },
      {
        path: 'test-categories',
        loadChildren: () => import('./test-categories/test-categories.module').then( m => m.TestCategoriesPageModule)
      },
      {
        path: 'applies-chemistry',
        loadChildren: () => import('./applies-chemistry/applies-chemistry.module').then( m => m.AppliesChemistryPageModule)
      },
    ]
  
  },
  
  // {path: 'tabs',component: TabComponent,},   {
  //   path: 'test-categories',
  //   loadChildren: () => import('./test-categories/test-categories.module').then( m => m.TestCategoriesPageModule)
  // },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
