import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  theme = 'theme';
  @Output() themeTypeOut = new EventEmitter();

  constructor(
    private _scrollDispatcher: ScrollDispatcher,
    private _element: ElementRef
  ) { }

  ngOnInit() {
    this._scrollDispatcher.ancestorScrolled(this._element).subscribe((scrollable: CdkScrollable) => {

      let top = this._element.nativeElement.parentElement.getBoundingClientRect().top < 0;

      for (let i = 0; i < this._element.nativeElement.children.length; i++) {
        if (top) {
          this._element.nativeElement.children[i].classList.add('small', 'background-primary');
        } else {
          this._element.nativeElement.children[i].classList.remove('small', 'background-primary');
        }
      }
    });
  }
  changeTheme() {
    this.theme = this.theme === 'theme' ? 'theme-custom' : 'theme';
    this.themeTypeOut.emit(this.theme);
  }
}
