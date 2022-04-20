import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategorPopupComponent } from './add-categor-popup.component';

describe('AddCategorPopupComponent', () => {
  let component: AddCategorPopupComponent;
  let fixture: ComponentFixture<AddCategorPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategorPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
