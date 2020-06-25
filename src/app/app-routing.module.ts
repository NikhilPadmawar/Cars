import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreScanComponent } from './pre-scan/pre-scan.component';
import { CardContainerComponent } from './card-container/card-container.component';


const routes: Routes = [
  { path: '', redirectTo: '/CardContainerComponent', pathMatch: 'full' },
  { path: 'orders', component: CardContainerComponent },
  { path: 'prescan', component: PreScanComponent },
  { path: 'prescan/:id', component: PreScanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
