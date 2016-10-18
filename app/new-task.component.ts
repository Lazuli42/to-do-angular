import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h1>New Task</h1>
    <div>
      <label>Enter Task Description:</label>
      <input #newDescription>
    </div>
    <div>
      <label>Enter Task ID:</label>
      <input #newId>
    </div>
    <div>
      <label>Priority</label>
      <select #newPriority>
        <option value="High">High</option>
        <option value="Medium" selected="selected">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
    <button (click)="
      addClicked(newDescription.value, newId.value, newPriority.value);
      newDescription.value='';
      newId.value='';
      newPriority.value='';
    ">Add</button>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, id: number, priority: string) {
    var newTaskToAdd: Task = new Task(description, id, priority);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
