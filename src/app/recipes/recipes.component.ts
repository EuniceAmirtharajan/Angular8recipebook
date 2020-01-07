import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
   recipes: Recipes[]=[new Recipes('pasta','veggiepasta',"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/02/caponata-pasta.jpg?itok=oyipDvVn")];
  constructor() { }

  ngOnInit() {
  }

}
