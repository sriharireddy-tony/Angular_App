import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingTeamsComponent } from './playing-teams.component';

describe('PlayingTeamsComponent', () => {
  let component: PlayingTeamsComponent;
  let fixture: ComponentFixture<PlayingTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayingTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
