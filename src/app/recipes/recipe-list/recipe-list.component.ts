import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This Is simply a test 1','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTj3lZHBusLUcj2mOSKviqv-FBPNxzzRXbHGS9DsFtYd_lV7Au-&usqp=CAU'),
    new Recipe('A Test Recipe2', 'This Is simply a test2','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDx8p7FmKFTGlT5KVenFYKQ80xRMPN9k8pRmlEBZ_7tNMlKyIg&usqp=CAU'),
    

    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
