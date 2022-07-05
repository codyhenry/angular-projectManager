import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLgComponent } from './sidenav-lg.component';

describe('SidenavLgComponent', () => {
  let component: SidenavLgComponent;
  let fixture: ComponentFixture<SidenavLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});