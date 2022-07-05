import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoardComponent } from './components/board/board.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { BoardBugsComponent } from './components/board-bugs/board-bugs.component';
import { BoardTasksComponent } from './components/board-tasks/board-tasks.component';
import { BugTableComponent } from './components/bug-table/bug-table.component';
import { TaskCategoryComponent } from './components/task-category/task-category.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { SidenavLgComponent } from './components/sidenav-lg/sidenav-lg.component';
import { SidenavSmComponent } from './components/sidenav-sm/sidenav-sm.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoardComponent,
    SidenavComponent,
    WorkspaceComponent,
    BoardBugsComponent,
    BoardTasksComponent,
    BugTableComponent,
    TaskCategoryComponent,
    TaskItemComponent,
    SidenavLgComponent,
    SidenavSmComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatBadgeModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatPaginatorModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
