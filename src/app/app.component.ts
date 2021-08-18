import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText:any;
  inputList:any = [];

  onEnterClicked(event:any) {
    if (event.which == 188 || event.which == 13) {
      this.inputText =this.inputText.replace(/,/ , '')
      this.inputList.push(this.inputText);
      this.inputText = '';
    }
  }

  removeListItem(i: number) {
    this.inputList.splice(i, 1);
  }
}
