import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPlayingComponent } from './users-playing.component';

describe('UsersPlayingComponent', () => {
  let component: UsersPlayingComponent;
  let fixture: ComponentFixture<UsersPlayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPlayingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
