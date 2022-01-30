export class Task {

    title: string;
    note: string;
    estPomodoro: number;
    projects: string[];
    completed = false;

    constructor(title: string, note: string, estPomodoro: number = 1, projects?: string[]){
        this.title = title;
        this.note = note;
        this.estPomodoro = estPomodoro;
        this.projects = projects;
    }
}