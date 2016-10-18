import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "priorities",
  pure: false
})

export class PrioritiesPipe implements PipeTransform {
  transform(input: Task[], desiredPriority) {
    console.log(desiredPriority);
    var output: Task[] = [];
    if (desiredPriority === "highFirst") {
      for (var i=0; i < input.length; i++) {
        if (input[i].priority === "High") {
          output.push(input[i]);
        }
      }
      for (var i=0; i < input.length; i++) {
        if (input[i].priority === "Medium") {
          output.push(input[i]);
        }
      }
      for (var i=0; i < input.length; i++) {
        if (input[i].priority === "Low") {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if (desiredPriority === "lowFirst") {
      for (var i=0; i < input.length; i++) {
        if (input[i].priority === "Low") {
          output.push(input[i]);
        }
      }
      for (var i=0; i < input.length; i++) {
        if (input[i].priority === "Medium") {
          output.push(input[i]);
        }
      }
      for (var i=0; i < input.length; i++) {
        if (input[i].priority === "High") {
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }
}
