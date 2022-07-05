import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavSmComponent } from './sidenav-sm.component';

describe('SidenavSmComponent', () => {
  let component: SidenavSmComponent;
  let fixture: ComponentFixture<SidenavSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
