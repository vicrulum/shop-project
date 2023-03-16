import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
          'Tacos', 
          'Delicious mexican food.', 
          'https://www.antojitomexicano.es/wp-content/uploads/tacos-mexicanos.jpg',
          [
            new Ingredient('Meat', 2),
            new Ingredient('Tomatoes', 4),
            new Ingredient('Tortilla', 5),
          ]),
        new Recipe(
          'Pizza', 
          'Italian food.', 
          'https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg', 
          [
            new Ingredient('Dough', 1),
            new Ingredient('Pepperoni', 10),
            new Ingredient('Cheese', 2),
            new Ingredient('Pinaple', 3),
          ]),
        new Recipe(
          'Hamburguer', 
          'Amazing american food.', 
          'https://cdn.forbes.com.mx/2021/06/whooper-burguer-king.jpg',
          [
            new Ingredient('Bread', 2),
            new Ingredient('Meat', 1),
            new Ingredient('Cheese', 2),
            new Ingredient('Bacon', 3),
          ])
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes.slice()[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}