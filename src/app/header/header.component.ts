import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line:no-output-rename
  @Output('changeCurrentPage') pageChange = new EventEmitter<string>();
  activePage: string;
  showUnlessDirective = true;

  constructor() { }

  ngOnInit() {
  }

  pageChangeEvent(pageName: string) {
    this.activePage = pageName;
    this.pageChange.emit(pageName);
  }

}
