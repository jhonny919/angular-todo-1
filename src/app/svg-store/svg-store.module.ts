import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgAllTasks } from './icons/svg-all-tasks.component';
import { SvgDeleteCategory } from './icons/svg-delete-category.component';
import { SvgEditCategory } from './icons/svg-edit-category.component';

@NgModule({
    imports: [CommonModule],
    declarations: [SvgAllTasks, SvgDeleteCategory, SvgEditCategory],
    exports: [SvgAllTasks, SvgDeleteCategory, SvgEditCategory],
})
export class SvgStoreModule {}
