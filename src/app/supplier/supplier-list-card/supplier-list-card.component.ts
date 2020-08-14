import { Component, OnInit, Input } from '@angular/core';
import { Supplier } from '../models/supplier';

@Component({
  selector: 'app-supplier-list-card',
  templateUrl: './supplier-list-card.component.html',
  styleUrls: ['./supplier-list-card.component.scss']
})
export class SupplierListCardComponent implements OnInit {
  
  @Input() items: Supplier[] = [];
  public columns: object[] = [];

  constructor() { }

  ngOnInit(): void {
    this.columns = this.getColumns();
  }

  private getColumns(): object[] {
    return [
      {
        name: "Id",
        flexGrow: 0.5,
        prop: "id",
      },
      {
        name: "Company Name",
        flexGrow: 1,
        prop: "companyName"
      },
      {
        name: "Contact Name",
        flexGrow: 1,
        prop: "contactName"
      },
      {
        name: "# Order",
        flexGrow: 0.5,
        prop: "orderNumber"        
      }
    ];
  }


}
