export class TimerMode {
    timeInMins: number;
    active: boolean;
    label: string;
    description: string;
    modelValue: string;
  
    constructor(time, label: string, active = false, description = '') {
      this.timeInMins = time;
      this.label = label;
      this.active = active;
      this.description = description;
      this.modelValue = this.camelize(this.label);
    }


    camelize = (str: String) => {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
    };


  }