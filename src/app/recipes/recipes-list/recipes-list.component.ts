import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("test recipe","simply test","https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1600%2Cc_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg"),
    new Recipe("test recipe","simply test","https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1600%2Cc_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
