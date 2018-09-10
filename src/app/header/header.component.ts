import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('changeCurrentPage') pageChange = new EventEmitter<string>();
  activePage: string;

  constructor() { }

  ngOnInit() {
  }

  pageChangeEvent(pageName: string) {
    this.activePage = pageName;
    this.pageChange.emit(pageName);
  }

}
