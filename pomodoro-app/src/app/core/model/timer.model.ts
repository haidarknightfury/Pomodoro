
export class Timer {

    private timeInMs: number;
    private interval: number;
    private callback: any;
    private timerInterval: any = null;
    private timeInMinutes;

    private readonly TIME_MS = 1000;

    constructor(timeInMs: number, interval = 1000,  callback: (...args: any[]) => void, private completedCallback?: (...args: any[]) => void) {
        this.timeInMs = timeInMs;
        this.interval = interval;
        this.callback = callback;
        this.timeInMinutes = timeInMs / (60 * this.TIME_MS);
    }

    hasStarted() {
        return this.timerInterval !== null
    }

    start() {
        this.timerInterval = setInterval(() => {
            this.timeInMs -= this.interval;
            this?.callback();
            if (this.timeInMs < 0) this.stop();
        }, this.interval);
    }

    stop() {
        clearInterval(this?.timerInterval);
        this.timerInterval = null;
        this.timeInMs = this.timeInMinutes * 60 * this.TIME_MS;
        this?.callback();
        this?.completedCallback();
    }

    getFormattedTime(): string {
        return (Math.floor((this.timeInMs / this.TIME_MS) / (60))) + ' : ' + (((this.timeInMs / this.TIME_MS) % 60) + '').padStart(2, '0');
    }
}