import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <button (click)="newTaskButton()">New Task</button>
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="isDone">Show Done</option>
      <option value="notDone" selected="selected">Show Not Done</option>
    </select>
    <select (change)="prioritySort($event.target.value)" class="filter">
      <option value="highFirst">Sort: High to Low</option>
      <option value="lowFirst">Sort: Low to High</option>
    </select>
    <select (change)="categoryFilter($event.target.value)" class="filter">
      <option value="all" selected="selected">All Tasks</option>
      <option value="Work">Work Tasks</option>
      <option value="Home">Home Tasks</option>
      <option value="Hobby">Hobby Tasks</option>
      <option value="Other">Other Tasks</option>
    </select>
    <new-task
      [showNewTask]="showNewTask"
      (newTaskSender)="newTask($event)"
    ></new-task>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness | priorities:selectedPriorities | category:selectedCategory">
      <task-display [task]="currentTask"></task-display>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";
  public selectedPriorities: string = "highFirst";
  public selectedCategory: string = "all";
  public showNewTask: boolean = false;
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
  prioritySort(preferredPriority) {
    this.selectedPriorities = preferredPriority;
  }
  categoryFilter(preferredCategory) {
    this.selectedCategory = preferredCategory;
  }
  newTask(newTask: Task) {
    console.log(newTask);
    this.childTaskList.push(newTask);
    this.showNewTask = false;
  }
  newTaskButton() {
    this.showNewTask = true;

  }
}
