import { Component, OnInit } from '@angular/core';
import { Stock } from "../stock";
import { StockService } from "../stock.service";
import {Router,ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-search-stock',
  templateUrl: './search-stock.component.html',
  styleUrls: ['./search-stock.component.css'],
  providers: [StockService]
})
export class SearchStockComponent implements OnInit {

  private stock: Stock;

  constructor(private router : Router , private route: ActivatedRoute,private stockService: StockService) {
  }

  ngOnInit() {

      this.searchStock(this.route.snapshot.params['id'])
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

 listStock(){

   this.router.navigate(['/stock']);
 }

 editStockPage(stock: Stock) {
   if (stock) {
     this.router.navigate(['/stock/edit', stock.id]);
   }
 }



 deleteStock(stock: Stock) {

   if (stock) {
          this.stockService.deleteStockById(stock.id).subscribe(
             output => {
               alert("Deleted Successfully");
               this.router.navigate(['/stock']);
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






}
