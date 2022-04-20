import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-add-categor-popup',
    templateUrl: './add-categor-popup.component.html',
    styleUrls: ['./add-categor-popup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCategorPopupComponent implements OnInit {
    @Output() onClose: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}
}
