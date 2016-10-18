import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>To-Do: Angular</h1>
    <task-list [childTaskList]="masterTaskList" (clickSender)="showDetails($event)"></task-list>
    <edit-task [childSelectedTask]="selectedTask" (doneClickedSender)="finishedEditing()"></edit-task>
    <new-task (newTaskSender)="addTask($event)"></new-task>
  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
      new Task("Create To-Do List app.", 0, "High", "Work"),
      new Task("Learn Kung Fu.", 1, "Low", "Hobby"),
      new Task("Rewatch all the Lord of the Rings movies.", 2, "Low", "Hobby"),
      new Task("Do the laundry.", 3, "Medium", "Home")
  ];
  public categories: string[] = [
    "Work",
    "Home",
    "Hobby"
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
