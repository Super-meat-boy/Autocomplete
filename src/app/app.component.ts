import {Component, ViewChild} from '@angular/core';
import {CreateNewAutocompleteGroup, NgAutocompleteComponent, SelectedAutocompleteItem} from 'ng-auto-complete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;

  public group = [];

  constructor() {

  }

  ngOnInit() {
    this.group = [CreateNewAutocompleteGroup(
      'Please Select a Flow from the List',
      'completer',
      [
        {title: 'Flux ARTXXXXXCX', id: '1', frequency: 'test'},
        {title: 'Flux CIGOGNEXXXXXXC', id: '2', frequency: 'test'},
        {title: 'CFTCGFDBVFHDTGFTGT', id: '3', frequency: 'test'},
        {title: 'FTPXXXX', id: '4', frequency: 'test'},
        {title: 'FTPXZZZ', id: '5', frequency: 'toto'},
        {title: 'FTPXRTG', id: '6', frequency: 'tata'},
        {title: 'FTPEEEE', id: '7', frequency: 'hello'},
        {title: 'FTPDDDD', id: '8', frequency: 'warning'},
        {title: 'IDFEGRGTERZGETREZFS', id: '9'},
      ],
      {titleKey: 'title', childrenKey: null,}),]
    ;
  }

  /**
   *
   * @param item
   * @constructor
   */
  Selected(item: SelectedAutocompleteItem) {
    console.log(item);
  }
}
