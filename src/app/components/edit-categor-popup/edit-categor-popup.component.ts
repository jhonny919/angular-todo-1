import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-edit-categor-popup',
    templateUrl: './edit-categor-popup.component.html',
    styleUrls: ['./edit-categor-popup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCategorPopupComponent implements OnInit {
    @Output() onClose: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}
}
