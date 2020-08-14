import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { OrderDetailService } from './order-detail.service';
import { OrderList } from '../models/order-list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  providers: [OrderDetailService]
})
export class OrderDetailComponent implements OnInit, AfterViewInit {

  orderId: number;
  orderItem: OrderList = new OrderList();
  public detailColumns:object[] = [];

  constructor(private ref: ChangeDetectorRef, private servce: OrderDetailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { 
      this.orderId = params.id; 
      this.getOrderById(params.id);
    });    
  }

  ngAfterViewInit(): void{
    this.detailColumns = this.getDetailColumns();
    this.ref.detectChanges();
  }  

  getOrderById(orderId: number): void {
    this.servce.getOrderById(orderId)
      .subscribe(response => {
          this.orderItem = response;
        });
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
