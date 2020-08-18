import { Component, OnInit, Input, ViewChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableViewComponent<T> implements OnInit {

  @Input() minTableHeight: number = 500;
  @Input() items: object[] = [];
  @Input() columns: object[] = [];
  @Input() limit?: number;
  @Input() detailTemplate: TemplateRef<any>;

  @ViewChild('myTable') table: any;

  // expanded: any = {};
  // rows: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpandRow(row) {
    //console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  // onDetailToggle(event) {
  //   console.log('Detail Toggled', event);
  // }
}
