import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../../services/recipe-service.service';

@Component({
  selector: 'app-recipe-list',
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  constructor(private service : RecipeServiceService){}
  ngOnInit(): void {
    this.getRecipesList();
  }
  recipes: any[] = [];
  getRecipesList(){
    this.service.getRecipes().subscribe((result:any)=>{
      this.recipes = result;
    })
  }
}
