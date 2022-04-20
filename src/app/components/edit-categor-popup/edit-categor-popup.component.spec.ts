import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategorPopupComponent } from './edit-categor-popup.component';

describe('EditCategorPopupComponent', () => {
    let component: EditCategorPopupComponent;
    let fixture: ComponentFixture<EditCategorPopupComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EditCategorPopupComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EditCategorPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
