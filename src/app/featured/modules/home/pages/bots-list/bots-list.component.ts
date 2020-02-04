import { Component, OnInit, ViewChild, ComponentFactoryResolver, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { CheckboxComponent } from 'src/app/shared/components/UI/checkbox/checkbox.component';
import { LoadComponentDynamicDirective } from 'src/app/shared/directives/load-component-dynamic.directive';
import { TextComponent } from 'src/app/shared/components/UI/text/text.component';

@Component({
  selector: 'app-bots-list',
  templateUrl: './bots-list.component.html',
  styleUrls: ['./bots-list.component.scss']
})
export class BotsListComponent {

  // @ViewChildren(LoadComponentDynamicDirective)
  // adHost: QueryList<LoadComponentDynamicDirective>;

  botsData: any[] = [
    {_id: 1, name: 'Hydrogen', status: true, msgsCount: 20},
    {_id: 2, name: 'Helium', status: true, msgsCount: 2},
    {_id: 3, name: 'Lithium', status: true, msgsCount: 45},
    {_id: 4, name: 'Beryllium', status: false, msgsCount: 200},
    {_id: 5, name: 'Boron', status: true, msgsCount: 10},
    {_id: 6, name: 'Carbon', status: false, msgsCount: 36},
    {_id: 7, name: 'Nitrogen', status: true, msgsCount: 0},
    {_id: 8, name: 'Oxygen', status: false, msgsCount: 89},
    {_id: 9, name: 'Fluorine', status: true, msgsCount: 44},
    {_id: 10, name: 'Neon', status: false, msgsCount: 0},
  ];

  columns: any[] = [
    {
      prop: '_id',
      displayText: 'Id',
    },
    {
      prop: 'name',
      displayText: 'Name'
    },
    {
      prop: 'status',
      displayText: 'Status',
      component: CheckboxComponent,
      props: [
        {
          propName: 'value',
          propValue: 'status'
        },
      ],
      events: [
        {
          eventName: 'valueChanged',
          eventHandler: this.callBackHandler
        }
      ]
    },
    {
      prop: 'msgsCount',
      displayText: 'Messages count',
      component: TextComponent,
      props: [
        {
          propName: 'value',
          propValue: 'msgsCount'
        },
      ],
      events: []
    },
  ];

  displayedColumns: any[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  callBackHandler(e) {
    console.log(e);
  }
  // ngOnInit() {
  //   this.columns.forEach((column) => {
  //     this.displayedColumns.push(column.prop);
  //   });


  // }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.loadComponent(this.adHost);
  //   }, 0);
  // }


  // loadComponent(adHost) {

  //   console.log(adHost.toArray());

  //   for (let i = 0 ; i < this.botsData.length ; i++) {
  //     const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.botsData[i].status.component);

  //     const viewContainerRef = adHost.toArray()[i].viewContainerRef;
  //     viewContainerRef.clear();

  //     const componentRef = viewContainerRef.createComponent(componentFactory);
  //     (componentRef.instance as any).value = this.botsData[i].status.value;
  //     (componentRef.instance as any).displayText = '';
  //     (componentRef.instance as any).valueChanged.subscribe((event) => console.log('parent', event));
  //   }
  // }

}
