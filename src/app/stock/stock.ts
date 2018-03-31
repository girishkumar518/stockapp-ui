export class Stock {

  id: number;
  name: string;
  currentPrice: number;
  lastUpdate: string;
  highPrice: number;
  lowPrice:number;
  faceValue:number;
  bookValue:number;

  constructor(id: number, name: string, currentPrice: number, lastUpdate: string,highPrice: number,lowPrice:number,faceValue:number,bookValue:number){
    this.id = id;
    this.name = name;
    this.currentPrice = currentPrice;
    this.lastUpdate = lastUpdate;
    this.highPrice = highPrice;
    this.lowPrice = lowPrice;
    this.faceValue = faceValue;
    this.bookValue = bookValue;
  }

}
