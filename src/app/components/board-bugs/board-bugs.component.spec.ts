import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardBugsComponent } from './board-bugs.component';

describe('BoardBugsComponent', () => {
  let component: BoardBugsComponent;
  let fixture: ComponentFixture<BoardBugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardBugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
