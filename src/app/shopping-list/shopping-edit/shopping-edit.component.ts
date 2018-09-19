import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') name: ElementRef;
  @ViewChild('amount') amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addItem(name: string, amount: number) {
    console.log('name : ', name, ' amount : ', amount);
    console.log('using viewchild');
    console.log('name : ', this.name.nativeElement.value, ' amount : ', this.amount.nativeElement.value);
    if (name && amount) {
      console.log('valid input');
      this.shoppingListService.addIngredient(name, amount);
    }
  }

}
