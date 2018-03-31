import { Component, OnInit } from '@angular/core';
import { Stock } from "../stock";
import { StockService } from "../stock.service";
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css'],
  providers: [StockService]
})
export class EditStockComponent implements OnInit {

   private stock: Stock;

  constructor(private router: Router,private route: ActivatedRoute,private stockService: StockService) { }

  ngOnInit() {

      this.searchStock(this.route.snapshot.params['id'])
  }


  searchRedirectStock(id: number) {
    if (id) {
      this.router.navigate(['/stock/search', id]);
     }

      }


  searchStock(id : number){

  this.stock = null;

  if (id) {
         this.stockService.findById(id).subscribe(
            stock => {
              this.stock = stock;
            },
            err => {
              console.log(err);
            }

          );

        }

  }



  updateStock(stock: Stock){

    if (stock) {

           this.stockService.updateStock(stock).subscribe(
              stock => {
                alert("Updated Successfully");
                this.router.navigate(['/stock/search', stock.id]);
              },
              err => {
                console.log(err);
              }

            );

          }

  }

  redirectNewStockPage() {
    this.router.navigate(['/stock/create']);
  }

  listStock(){

    this.router.navigate(['/stock']);
  }


}
