export class Task {
    id: any;
    completed = false;
    constructor(public title: string, public note: string, public estPomodoro: number = 1,public projects?: string[]){
    }
}