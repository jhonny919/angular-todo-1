import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SvgStoreModule } from './svg-store/svg-store.module';

import { AuthComponent } from './pages/auth/auth.component';
import { MainComponent } from './pages/main/main.component';

import { AppComponent } from './app.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { AddCategorPopupComponent } from './components/add-categor-popup/add-categor-popup.component';
import { EditCategorPopupComponent } from './components/edit-categor-popup/edit-categor-popup.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        LeftMenuComponent,
        WorkspaceComponent,
        AddCategorPopupComponent,
        EditCategorPopupComponent,
        AuthComponent,
        MainComponent,
        RegisterComponent,
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, RouterModule, SvgStoreModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
