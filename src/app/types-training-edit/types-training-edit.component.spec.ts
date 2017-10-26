import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesTrainingEditComponent } from './types-training-edit.component';

describe('TypesTrainingEditComponent', () => {
  let component: TypesTrainingEditComponent;
  let fixture: ComponentFixture<TypesTrainingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesTrainingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesTrainingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
