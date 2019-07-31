import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsDetailComponent } from './topics-detail.component';

describe('TopicsDetailComponent', () => {
  let component: TopicsDetailComponent;
  let fixture: ComponentFixture<TopicsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
