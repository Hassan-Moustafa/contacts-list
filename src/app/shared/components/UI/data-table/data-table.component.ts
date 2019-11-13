import { Component, OnInit, ViewChildren, QueryList, Input, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { LoadComponentDynamicDirective } from 'src/app/shared/directives/load-component-dynamic.directive';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input()
  dataSource: any[];

  @Input()
  columns: any[];

  displayedColumns: any[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.columns.forEach((column) => {
      this.displayedColumns.push(column.prop);
    });
  }

}
