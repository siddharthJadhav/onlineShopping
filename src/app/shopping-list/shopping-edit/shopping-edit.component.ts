import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') name: ElementRef;
  @ViewChild('amount') amount: ElementRef;
  @Output() newItemAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addItem(name: string, amount: number) {
    console.log('name : ', name, ' amount : ', amount);
    console.log('using viewchild');
    console.log('name : ', this.name.nativeElement.value, ' amount : ', this.amount.nativeElement.value);
    if(name && amount) {
      console.log('valid input');
      this.newItemAdded.emit(new Ingredient(name, amount));
    }
  }

}
