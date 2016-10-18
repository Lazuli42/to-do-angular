import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
  <div *ngIf="childSelectedTask">
    <h1>Edit Task</h1>
    <div>
      <label>Enter Task Description:</label>
      <input [(ngModel)]="childSelectedTask.description">
    </div>
    <div>
      <label>Enter Task ID:</label>
      <input [(ngModel)]="childSelectedTask.id">
    </div>
    <div>
      <label>Priority</label>
      <select name="priority" [(ngModel)]="childSelectedTask.priority">
        <option Value="High">High</option>
        <option Value="Medium">Medium</option>
        <option Value="Low">Low</option>
      </select>
    </div>
    <button (click)="doneClicked()">Done</button>
  </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
