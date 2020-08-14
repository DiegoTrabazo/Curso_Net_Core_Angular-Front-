import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAltComponent } from './home-alt.component';

describe('HomeAltComponent', () => {
  let component: HomeAltComponent;
  let fixture: ComponentFixture<HomeAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
