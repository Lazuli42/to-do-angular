import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <div *ngIf="showNewTask">
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
      <div>
        <label>Category</label>
        <select #newCategory>
          <option value="Work">Work</option>
          <option value="Home" selected="selected">Home</option>
          <option value="Hobby">Hobby</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button (click)="
        addClicked(newDescription.value, newId.value, newPriority.value, newCategory.value);
        newDescription.value='';
        newId.value='';
        newPriority.value='';
        newCategory.value='';
      ">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  @Input() showNewTask: boolean;
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, id: number, priority: string, category: string) {
    var newTaskToAdd: Task = new Task(description, id, priority, category);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
