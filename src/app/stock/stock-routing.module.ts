import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllStocksComponent } from './all-stocks/all-stocks.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { SearchStockComponent } from './search-stock/search-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';

const routes: Routes = [
 {path: 'stock', component: AllStocksComponent},
  {path: 'stock/create', component: CreateStockComponent},
  {path: 'stock/edit/:id', component: EditStockComponent},
  {path: 'stock/search/:id', component: SearchStockComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
