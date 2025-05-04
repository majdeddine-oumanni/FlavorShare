import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Recipe {
  id: number;
  name: string;
  rating: number;
  cookingTime: string;
  chef: string;
  ingredients: string;
  instructions: string[];
  comments: string[];
}

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  private url = "http://localhost:3000/recipes";
  constructor(private http : HttpClient) { }
  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.url);
  }
  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.url}/${id}`);
  }

}
