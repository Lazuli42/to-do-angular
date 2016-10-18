import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PiesListComponent } from './pies-list.component';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list.component';
import { EditTaskComponent } from './edit-task.component';
import { NewTaskComponent } from './new-task.component';
import { CompletenessPipe } from './completeness.pipe';
import { TaskComponent } from './task.component';
import { PrioritiesPipe } from './priorities.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    PiesListComponent,
    AppComponent,
    TaskListComponent,
    EditTaskComponent,
    NewTaskComponent,
    CompletenessPipe,
    TaskComponent,
    PrioritiesPipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule{}
