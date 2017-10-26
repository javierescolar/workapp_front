import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesTrainingCreateComponent } from './types-training-create.component';

describe('TypesTrainingCreateComponent', () => {
  let component: TypesTrainingCreateComponent;
  let fixture: ComponentFixture<TypesTrainingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesTrainingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesTrainingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
