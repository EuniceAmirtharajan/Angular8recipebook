import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipes[]=[new Recipes('pasta','veggiepasta',"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/02/caponata-pasta.jpg?itok=oyipDvVn"),
  new Recipes('pasta','veggiepasta',"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/02/caponata-pasta.jpg?itok=oyipDvVn")];
  constructor() { }

  ngOnInit() {
  }

}
