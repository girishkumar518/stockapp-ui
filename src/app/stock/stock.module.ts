import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StockRoutingModule } from './stock-routing.module';
import { AllStocksComponent } from './all-stocks/all-stocks.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { SearchStockComponent } from './search-stock/search-stock.component';
import { CreateStockComponent } from './create-stock/create-stock.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StockRoutingModule
  ],
  declarations: [AllStocksComponent, EditStockComponent, SearchStockComponent, CreateStockComponent]
})
export class StockModule { }
