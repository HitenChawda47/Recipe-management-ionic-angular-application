import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';
import { Subscription } from 'rxjs';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes:Recipe[];
  private recipeListSubs:Subscription;
  constructor(private recipesService:RecipesService, public actionSheetController: ActionSheetController, private router:Router) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    this.recipeListSubs = this.recipesService.recipesChanged.subscribe(recipes => {
      this.recipes = recipes;
      //or below statement will also work
      //this.recipes = this.recipesService.getAllRecipes();
    });
  }



  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Recipe Action',
      buttons: [{
        text: 'Add',
        role: 'creative',
        icon: 'add-outline',
        handler: () => {
          this.router.navigate(['/recipes/addRecipe']);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  

  ngOnDestroy(){
    this.recipeListSubs.unsubscribe();
  }

 

}
