
export class Timer {

    private timeInMs: number;
    private interval: number;
    private callback: any;
    private timerInterval: any = null;

    constructor(timeInMs: number, interval = 1000, callback: (...args: any[]) => void){
        this.timeInMs = timeInMs;
        this.interval = interval;
        this.callback = callback;
    }

    hasStarted () {
        return this.timerInterval !== null
    }

    start() {
      this.timerInterval = setInterval(()=> {
            this.timeInMs -= this.interval;
            this?.callback();
            if (this.timeInMs < 0) this.stop(); 
       }, this.interval);
    }

    stop() {
        clearInterval(this?.timerInterval);
        this.timerInterval = null;
        this.timeInMs = 25* 60 * 1000; // TODO : remove hardcode
        this?.callback();
    }

    getFormattedTime(): string {
        return (Math.floor((this.timeInMs/ 1000) / (60))) + ' : '  + (((this.timeInMs/1000) % 60) + '').padStart(2, '0');
    }
}