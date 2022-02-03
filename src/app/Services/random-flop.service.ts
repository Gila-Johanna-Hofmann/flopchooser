import { Injectable } from "@angular/core";
import { FLOP_DATA } from "../FLOP_DATA";

@Injectable({ 
    providedIn: "root" 
})
export class RandomFlopService {
    flops = FLOP_DATA;
    
    randomIndexOne() {
        return Math.floor(Math.random() * this.flops.length);
    }

    randomIndexTwo() {
        let indexTwo = Math.floor(Math.random() * this.flops.length);
        
        while (indexTwo === this.randomIndexOne()) {
            indexTwo = Math.floor(Math.random() * this.flops.length);
        }
        return indexTwo;
    }
}