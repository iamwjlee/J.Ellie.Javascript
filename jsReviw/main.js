
'use strict';
console.log('Hello World');
console.log('Hello ');

class Counter {
    constructor(runEveryFiveTimes) {
        this.counter=0;
        this.callback=runEveryFiveTimes;
    }
    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter%5===0) {
            //console.log('yo');
            //runIf5Times(this.counter);
            this.callback && this.callback(this.counter);
        }
    }

}

function printSomething(num){
    console.log('Yo!'+ num);
}
function alertNum(num){
    alert('Yo!'+ num);
}

//const coolCounter=new Counter();
const coolCounter=new Counter(printSomething);
const coolCounter2=new Counter(alertNum);
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();