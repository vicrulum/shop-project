import { Subject } from 'rxjs'
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChange = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Tortilla', 5),
        new Ingredient('Meat', 1),
        new Ingredient('Onion', 3),
        new Ingredient('Tomatoes', 4),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChange.next(this.ingredients.slice());
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChange.next(this.ingredients.slice())
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChange.next(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]){
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient)
        // }

        this.ingredients.push(...ingredients);
        this.ingredientsChange.next(ingredients.slice());
    }
}