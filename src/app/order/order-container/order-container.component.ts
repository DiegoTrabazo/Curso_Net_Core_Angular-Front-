import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { OrderContainerService } from './order-container.service';
import { OrderList } from '../models/order-list';
import { TableViewComponent } from 'src/app/shared/table-view/table-view.component';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.scss'],
  providers: [OrderContainerService]
})
export class OrderContainerComponent implements OnInit, AfterViewInit {

  @ViewChild("tableView") tableView: TableViewComponent<any>;
  @ViewChild("orderIdCellTemplate") private orderIdCellTemplate: TemplateRef<any>;
  @ViewChild("orderNumberCellTemplate") private orderNumberCellTemplate: TemplateRef<any>;

  public detailColumns: object[] = [];
  public columns: object[] = [];
  items: OrderList[] = [];  
  numberOfRecords: number = 0;
  pageSizeOptions: number[] = [10, 20, 30];
  pageSize: number = 10;
  pageIndex: number = 0;

  constructor(private ref: ChangeDetectorRef, private service: OrderContainerService) { 
    
  }

  ngOnInit() {    
    this.getOrders(1, 10);
  }

  ngAfterViewInit(): void{
    this.columns = this.getColumns();
    this.detailColumns = this.getDetailColumns();
    this.ref.detectChanges();
  }
  
  getOrders(page: number, rows: number): void {
    this.service.getOrderList(page, rows)
      .subscribe(
        response => {
          this.items = response;
          this.numberOfRecords = response[0].totalRecords;
      });
  }

  changePage(event: any): void {
    this.getOrders(event.pageIndex + 1, event.pageSize);
  }

  toggleExpandRow(row: any) {
    // console.log('Toggled Expand Row!', row);
    this.tableView.toggleExpandRow(row);
    this.ref.detectChanges();
  }

  private getColumns(): object[] {
    return [
      {
        name: "Id",
        flexGrow: 0.5,
        //prop: "orderId",
        cellTemplate: this.orderIdCellTemplate
      },
      {
        name: "Customer",
        flexGrow: 1,
        prop: "customer"
      },
      {
        name: "Total",
        flexGrow: 0.5,
        prop: "totalAmount"
      },
      {
        name: "# Order",
        flexGrow: 0.5,
        //prop: "orderNumber"
        cellTemplate: this.orderNumberCellTemplate
      }
    ];
  }

  private getDetailColumns(): object[] {
    return [
      {
        name: "Product",
        flexGrow: 0.5,
        prop: "productName"
      },
      {
        name: "Unit Price",
        flexGrow: 1,
        prop: "unitPrice"
      },
      {
        name: "Quantity",
        flexGrow: 0.5,
        prop: "quantity"
      }
    ];
  }
}
