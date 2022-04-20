import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
    pageForm = this.fb.group({
        username: '',
        password: '',
    });
    isValid: boolean = false;

    constructor(private router: Router, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.pageForm.valueChanges.subscribe(() => {
            this.isValid = this.pageForm.value['username'] && this.pageForm.value['password'];
        });
    }

    login() {
        if (this.isValid) {
        }
    }

    goToRegister() {
        this.router.navigateByUrl('/auth/register');
    }
}
