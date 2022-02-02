import { Component } from '@angular/core';
import { FLOP_DATA } from './FLOP_DATA';
import { RandomFlopService } from './Services/random-flop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public randomFlopService: RandomFlopService) {}

  flops = FLOP_DATA;
  hideCorrect: boolean = true;
  hideIncorrect: boolean = true;
  hideButton: boolean = true;
  indexOne = this.randomFlopService.indexOne;
  indexTwo = this.randomFlopService.indexTwo;
  

  onClick() {
    this.indexOne = this.randomFlopService.randomIndexOne();
    this.indexTwo = this.randomFlopService.randomIndexTwo();
    this.hideCorrect = true;
    this.hideIncorrect = true;
    this.hideButton = true;
    
    console.log("indexOne. "+this.indexOne)
    console.log("indexTwo " +this.indexTwo)
  }

  

  onChooseFlop(chosenFlop: number) {
    if (chosenFlop === 1) {
      if(this.indexOne > this.indexTwo) {
        this.hideCorrect = false;
      }
      else{
        this.hideIncorrect = false;
      }
      this.hideButton = false;
    }
    else if (chosenFlop === 2) {
      if(this.indexTwo > this.indexOne) {
        this.hideCorrect = false;
      }
      else{
        this.hideIncorrect = false;
      }
      this.hideButton = false;
    }
  }
}
  

  

  

