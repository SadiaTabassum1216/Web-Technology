import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitFormComponent } from './fruit-form/fruit-form.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

const routes: Routes = [
  
    { path: '', pathMatch: 'full', redirectTo: '/form' },
      // { path: '', component: FruitFormComponent },
  { path: 'form', component: FruitFormComponent },
  { path: 'list', component: FruitListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
