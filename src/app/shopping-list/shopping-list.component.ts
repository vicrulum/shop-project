import { Component, OnDestroy, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingComponent implements OnInit, OnDestroy {

    ingredients: Ingredient[];

    private igChangeSub: Subscription;

    constructor (private slService: ShoppingListService){}

    ngOnInit(): void {
        this.ingredients = this.slService.getIngredients();
        this.igChangeSub = this.slService.ingredientsChange.subscribe((ingredients:Ingredient[]) =>{
            this.ingredients = ingredients;
        })
    }

    onEditItem(index: number){
        this.slService.startedEditing.next(index)
    }

    ngOnDestroy(): void {
        this.igChangeSub.unsubscribe();
    }
    
}