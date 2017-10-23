import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesTrainingComponent } from './types-training.component';

describe('TypesTrainingComponent', () => {
  let component: TypesTrainingComponent;
  let fixture: ComponentFixture<TypesTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
