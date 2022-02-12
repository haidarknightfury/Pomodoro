
export class Timer {

    private timeInMs: number;
    private interval: number;
    private callback: any;
    private timerInterval: any = null;
    private timeInMinutes;

    constructor(timeInMs: number, interval = 1000,
                callback: (...args: any[]) => void, 
                private completedCallback?:(...args:any[]) => void){
        this.timeInMs = timeInMs;
        this.interval = interval;
        this.callback = callback;
        this.timeInMinutes = timeInMs / (60*1000);
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
        this.timeInMs = this.timeInMinutes* 60 * 1000; // TODO : remove hardcode
        this?.callback();
        this?.completedCallback();
    }

    getFormattedTime(): string {
        return (Math.floor((this.timeInMs/ 1000) / (60))) + ' : '  + (((this.timeInMs/1000) % 60) + '').padStart(2, '0');
    }
}