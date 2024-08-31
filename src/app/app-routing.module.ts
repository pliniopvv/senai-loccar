import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosListComponent } from './view/veiculos-list/veiculos-list.component';
import { VeiculosDetailsComponent } from './view/veiculos-details/veiculos-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: VeiculosListComponent },
  { path: 'details/:id', component: VeiculosDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
