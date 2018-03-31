import { Component, OnInit } from '@angular/core';
import { Stock } from "../Stock";
import { StockService } from "../stock.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
  providers: [StockService]
})
export class CreateStockComponent implements OnInit {

   newStock = {};
  constructor(private router: Router,private stockService: StockService) { }

  ngOnInit() {
  }

  createStock(){

    if(this.newStock){
      this.newStock.lastUpdate = new Date();
      this.stockService.createStock(this.newStock).subscribe(
         stock => {
           alert("Created Successfully");
           this.router.navigate(['/stock']);
         },
         err => {
           console.log(err);
         }

       );

     }

  }

  goBack(){
 this.router.navigate(['/stock']);
  }


}
