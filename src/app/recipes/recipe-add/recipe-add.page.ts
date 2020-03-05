import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.page.html',
  styleUrls: ['./recipe-add.page.scss'],
})
export class RecipeAddPage implements OnInit {
  private id:string;
  private title:string;
  private imageUrl:string;
  private ingredients:string;
  
  constructor(private recipesService:RecipesService, private router:Router,private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  addNewRecipe(){
    this.id = (<HTMLInputElement>document.getElementById("idInput")).value;
    this.title = (<HTMLInputElement>document.getElementById("titleInput")).value;
    this.imageUrl = (<HTMLInputElement>document.getElementById("imageUrlInput")).value;
    this.ingredients = (<HTMLInputElement>document.getElementById("ingredientsInput")).value;
    if(this.id=="" || this.title=="" || this.imageUrl=="" || this.ingredients==""){
      this.alertCtrl.create({
        header:"Invalid Input",
        message:"Some of the fields are not properly filled up",
        buttons:[
          {
            text:"Okay",
            role:"Okay"
          }
        ]
      }).then(alertEl => {
        alertEl.present();
      });
      return;
    }

    console.log(this.id+this.title+this.imageUrl+this.ingredients);
    
    this.recipesService.addRecipe(this.id, this.title, this.imageUrl, this.ingredients);

    (<HTMLInputElement>document.getElementById("idInput")).value="";
    (<HTMLInputElement>document.getElementById("titleInput")).value="";
    (<HTMLInputElement>document.getElementById("imageUrlInput")).value="";
    (<HTMLInputElement>document.getElementById("ingredientsInput")).value="";
    this.router.navigate(['/recipes']);

  }

}
