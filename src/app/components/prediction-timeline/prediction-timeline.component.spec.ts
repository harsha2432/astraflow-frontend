import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionTimelineComponent } from './prediction-timeline.component';

describe('PredictionTimelineComponent', () => {
  let component: PredictionTimelineComponent;
  let fixture: ComponentFixture<PredictionTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredictionTimelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PredictionTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
