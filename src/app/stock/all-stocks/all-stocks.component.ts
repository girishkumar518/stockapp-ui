import { Component, OnInit } from '@angular/core';
import { Stock } from "../stock";
import { StockService } from "../stock.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-stocks',
  templateUrl: './all-stocks.component.html',
  styleUrls: ['./all-stocks.component.css'],
  providers: [StockService]
})
export class AllStocksComponent implements OnInit {

  private stocks: Stock[];

  constructor(private router: Router,private stockService: StockService) { }

  ngOnInit() {
    this.getAllStocks();
  }

  getAllStocks() {
    this.stockService.findAll().subscribe(
      stocks => {
        this.stocks = stocks;
      },
      err => {
        console.log(err);
      }

    );
  }

  redirectNewStockPage() {
    this.router.navigate(['/stock/create']);
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
                this.getAllStocks();
              },
              err => {
                console.log(err);
              }

            );

          }

  }

searchStock(id: number) {
  if (id) {
    this.router.navigate(['/stock/search', id]);
   }

    }

}
