import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input() placeholder: string;
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChangeHandler(event) {
    this.onChange.emit(event.target.value);
  }

}
