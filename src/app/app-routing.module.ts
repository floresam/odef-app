import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OdefComponent } from './odef/odef.component';
import { OdefDetailComponent } from './odef-detail/odef-detail.component';

const routes: Routes = [
    { path: 'odef', component: OdefComponent },
    { path: 'detail/:type/:id', component: OdefDetailComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
