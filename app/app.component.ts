import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 app</h1>
    <pies>Loading Pies...</pies>
    <task-list [childTaskList]="masterTaskList" (clickSender)="showDetails($event)"></task-list>
    <edit-task [childSelectedTask]="selectedTask" (doneClickedSender)="finishedEditing()"></edit-task>
    <new-task (newTaskSender)="addTask($event)"></new-task>
  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
      new Task("Create To-Do List app.", 0, "High"),
      new Task("Learn Kung Fu.", 1, "Low"),
      new Task("Rewatch all the Lord of the Rings movies.", 2, "Low"),
      new Task("Do the laundry.", 3, "Medium")
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task){
    this.masterTaskList.push(newTaskFromChild);
  }
}
