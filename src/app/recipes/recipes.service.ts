import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes:Recipe[] = [
    {
      id:'r1',
      title:'Schnitzel',
      imageUrl:'https://www.thespruceeats.com/thmb/oAls2Y49HemUbrDOUAdv14Mk3V8=/4288x2412/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      ingredients:['French Fries','Park Meat','Salad']
    },
    {
      id:'r2',
      title:'Vadapav',
      imageUrl:'data:image/jpeg;base64,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',
      ingredients:['Potato','Pav','Chatni']
    }
  ];
  public customObj:Recipe;


  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId:string){
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId:string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
    console.log(this.recipes);
    this.recipesChanged.next(this.recipes);
  }
  addRecipe(id:string,title:string,imageUrl:string,ingredients:string){
    var recipeObj: Recipe = {id: id, title:title, imageUrl:imageUrl,ingredients:ingredients.split(",")};
    this.recipes.push(recipeObj);
    this.recipesChanged.next(this.recipes);
    console.log(this.recipes);
  }
}