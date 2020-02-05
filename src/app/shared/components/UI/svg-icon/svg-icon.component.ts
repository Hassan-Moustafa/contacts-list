import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {

  defaultPath = '../../../../assets/svg-icons/';
  @Input() path: string;
  @Input() iconName: string;

  constructor() { }

  ngOnInit() {
    if (this.path) {
      this.defaultPath = this.path;
    }

    this.defaultPath += this.iconName + '.svg';
  }

}
