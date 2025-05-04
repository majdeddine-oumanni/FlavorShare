import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipeServiceService } from '../../services/recipe-service.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  private service = inject(RecipeServiceService);
  ngOnInit(): void {
    
  }
}
