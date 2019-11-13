import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  // defaultValue = false;

  @Input() value: boolean;
  @Input() displayText: string;
  @Input() addionalData: any;
  @Output() valueChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    // if (this.value === undefined) {
    //   this.value = false;
    // }
  }

  /**
   * onChangeHandler
   */
  public onChangeHandler(e) {
    this.value = e.checked;
    this.valueChanged.emit({
      ...this.addionalData,
      newValue: this.value
    });
  }

}
