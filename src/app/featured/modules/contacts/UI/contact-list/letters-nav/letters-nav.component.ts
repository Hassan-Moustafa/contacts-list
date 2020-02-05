import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letters-nav',
  templateUrl: './letters-nav.component.html',
  styleUrls: ['./letters-nav.component.scss']
})
export class LettersNavComponent implements OnInit {

  lettersString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor() { }

  ngOnInit() {
  }

  getLetters(){
    return this.lettersString.split('');
  }

}
