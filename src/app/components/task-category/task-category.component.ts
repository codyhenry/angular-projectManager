import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

//MUST JSON STRINGIFY THE DATA THAT COMES IN
export interface Task{
  name:string;
  created:string;
  assignedTo:string;
  description:string;
  attachment: string;
  priority: string;
}

export interface Category{
  id: string;
  tasks: Task[];
}

export const TASKS: Category[] = [
  {
    id: "To Do",
    tasks: [
      {
        name: 'Get to work',
        created: 'July 7, 2022',
        assignedTo: 'Cody',
        description: 'I have to get to work',
        attachment: "",
        priority: 'red'
      },
      {
        name: 'Pick up groceries',
        created: 'July 8, 2022',
        assignedTo: 'Bob',
        description: 'Go to grocery store',
        attachment: "",
        priority: 'limegreen'
      },
      {
        name: 'Go home',
        created: 'July 9, 2022',
        assignedTo: 'Cody',
        description: 'Lets go back home',
        attachment: "" ,
        priority: 'red'
      },
      {
        name: 'Fall asleep',
        created: 'July 9, 2022',
        assignedTo: 'Tom',
        description: 'Time for bed',
        attachment: "" ,
        priority: 'gold'
      },
    ],
  },
  {    
    id: "Done",
    tasks: [
      {
        name: 'Get up', 
        created: 'July 7, 2022',
        assignedTo: 'Cody',
        description: 'Time to start the day',
        attachment: "1",
        priority: 'red'
      },
      {
        name: 'Brush teeth',
        created: 'July 8, 2022',
        assignedTo: 'Bob',
        description: 'Brush',
        attachment: "",
        priority: 'limegreen'
      },
      {
        name: 'Check e-mail',
        created: 'July 11, 2022',
        assignedTo: 'Jake',
        description: 'Anyhting new?',
        attachment: "" ,
        priority: 'red'
      },
      {
        name: 'Walk dog',
        created: 'July 12, 2022',
        assignedTo: 'Bob',
        description: 'He needs to go out',
        attachment: "" ,
        priority: 'gold'
      },
    ],
  },
  {
    id: "In Progress",
    tasks: [
      {
        name: 'Wash Clothes',
        created: 'July 8, 2022',
        assignedTo: 'Bob',
        description: 'Brush',
        attachment: "",
        priority: 'limegreen'
      },
      {
        name: 'Go to doctors',
        created: 'July 10, 2022',
        assignedTo: 'Jake',
        description: 'Anyhting new?',
        attachment: "" ,
        priority: 'red'
      },
      {
        name: 'Get gasoline really long example card just to see what happens it needs to be longer to really see any difference',
        created: 'July 9, 2022',
        assignedTo: 'Jonathan',
        description: 'He needs to go out',
        attachment: "" ,
        priority: 'gold'
      },
    ],
  }
]

@Component({
  selector: 'app-task-category',
  templateUrl: './task-category.component.html',
  styleUrls: ['./task-category.component.css']
})

export class TaskCategoryComponent {
  
  taskList: Category[] = TASKS;
  selected: string[]=[];
  

  drop(event: CdkDragDrop<Task[]>) {
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

  test(string: string ){
    console.log( string + " clicked");
  }

  //FIXTHIS filter not working
  applyFilter(filters: string[]) {

    var newTaskList: Category[] = TASKS;
    if(filters.length === 0){
      console.log("empty");
      console.log(TASKS);
      return this.taskList;
    }
/*
    this.taskList = this.taskList.filter((item)=>{
      return filters.includes(item.tasks[0].priority || item.tasks[0].assignedTo)
    })
   /* //for each category check its tasks. for each task check 
    this.taskList.forEach(item => item.tasks.filter((x) => {
      return filters.includes(x.priority || x.assignedTo);
    }));
*/

newTaskList.forEach((category) => category.tasks.every(function (b, i , bb){
  if(b.priority === filters[0]){
    console.log(b.priority);
    bb.splice(i, 1);
    return true;
  }
  return false;
})
)
/*
newTaskList.some(function (category){
  return category.tasks.every(function (b, i , bb){
    if(b.priority === filters[0]){
      bb.splice(i, 1);
      return true;
    }
    return false;
  });
});
    
/*

     newTaskList.some(function (category){
      return category.tasks.every(function (b, i , bb){
        if(b.priority === filters[0]){
          bb.splice(i, 1);
          return true;
        }
        return false;
      });
    });
*/
    //console.log(this.taskList);
    return this.taskList;
  }
}
