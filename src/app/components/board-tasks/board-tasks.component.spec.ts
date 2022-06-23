import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTasksComponent } from './board-tasks.component';

describe('BoardTasksComponent', () => {
  let component: BoardTasksComponent;
  let fixture: ComponentFixture<BoardTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
