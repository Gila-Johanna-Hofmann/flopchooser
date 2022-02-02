import { Injectable } from "@angular/core";
import { FLOP_DATA } from "../FLOP_DATA";

@Injectable({ 
    providedIn: "root" 
})
export class RandomFlopService {
    flops = FLOP_DATA;
    
    indexOne = this.randomIndexOne();
    indexTwo = this.randomIndexTwo();

    randomIndexOne() {
        return Math.floor(Math.random() * this.flops.length);
    }

    randomIndexTwo() {
        let indexTwo = Math.floor(Math.random() * this.flops.length);
        
        while (indexTwo === this.indexOne) {
            indexTwo = Math.floor(Math.random() * this.flops.length);
        }
        return indexTwo;
    }
}