import { Time } from "@angular/common";

export class Nap {
    napId: number;
    start: Time;
    end: Time;

    constructor(start: Time){
        this.start=start;
    }
}
