import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

//MUST JSON STRINGIFY THE DATA THAT COMES IN
export interface Category{
  id: string;
  tasks: string[];
}

export const TASKS: Category[] = [
  {
    id: "To Do",
    tasks: [
      'Get to work',
      'Pick up groceries',
      'Go home', 
      'Fall asleep'
    ],
  },
  {    
    id: "Done",
    tasks: [
      'Get up', 
      'Brush teeth', 
      'Take a shower', 
      'Check e-mail', 
      'Walk dog'
    ],
  },
  {
    id: "In Progress",
    tasks: [
      "Wash Clothes",
      "Go to doctors",
      "Get gasoline really long example card just to see what happens"
    ],
  }
]

@Component({
  selector: 'app-task-category',
  templateUrl: './task-category.component.html',
  styleUrls: ['./task-category.component.css']
})

export class TaskCategoryComponent {
  
  tasks: Category[] = TASKS;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
