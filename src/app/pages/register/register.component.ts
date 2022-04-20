import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    pageForm = this.fb.group({
        username: '',
        password: '',
        confPassword: '',
    });
    isValid: boolean = false;

    constructor(private fb: FormBuilder, private router: Router) {}

    ngOnInit(): void {
        this.pageForm.valueChanges.subscribe(() => {
            this.isValid =
                this.pageForm.value['username'] &&
                this.pageForm.value['password'] &&
                this.pageForm.value['confPassword'];
        });
    }

    register() {
        if (this.isValid) {
        }
    }

    goToLogin() {
        this.router.navigateByUrl('/auth/login');
    }
}
