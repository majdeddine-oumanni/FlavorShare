import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'list', component: RecipeListComponent}
];
