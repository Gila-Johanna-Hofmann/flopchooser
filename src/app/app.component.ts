import { Component, OnInit } from '@angular/core';
import { FLOP_DATA } from './FLOP_DATA';
import { RandomFlopService } from './Services/random-flop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  flops;
  hideCorrect = true;
  hideIncorrect = true;
  hideButton = true;
  indexOne!: number;
  indexTwo!: number;

  constructor(private randomFlopService: RandomFlopService) {
    this.flops = FLOP_DATA;
    
  }

  ngOnInit() {
    this.hideCorrect = true;
    this.hideIncorrect = true;
    this.hideButton = true;
    this.indexOne = this.randomFlopService.randomIndexOne();
    this.indexTwo = this.randomFlopService.randomIndexTwo();
  }


  onClick() {
    this.indexOne = this.randomFlopService.randomIndexOne();
    this.indexTwo = this.randomFlopService.randomIndexTwo();
    this.hideCorrect = true;
    this.hideIncorrect = true;
    this.hideButton = true;
  }

  

  onChooseFlop(chosenFlop: number) {
    if(this.hideButton === true) {
      if (chosenFlop === 1) {
        if(this.indexOne < this.indexTwo) {
          this.hideCorrect = false;
        }
        else{
          this.hideIncorrect = false;
        }
        this.hideButton = false;
      }
      else if (chosenFlop === 2) {
        if(this.indexTwo < this.indexOne) {
          this.hideCorrect = false;
        }
        else{
          this.hideIncorrect = false;
        }
        this.hideButton = false;
      }
    } 
  }
}
  

  

  

