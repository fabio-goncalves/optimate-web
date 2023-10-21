import { StorageService } from './../../../services/storage.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomValidators } from 'src/app/config/CustomValidators';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  user: User;
  errorMessage = '';
  subscription: Subscription;

  constructor(
    private storageService: StorageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.compose([Validators.required])],
        lastName: ['', Validators.compose([Validators.required])],
        username: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            ),
          ]),
        ],
        confirmPassword: ['', Validators.compose([Validators.required])],
        email: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
          ]),
        ],
        activated: ['true'],
        receiveEmails: ['true'],
        roles: [''],
        avatar: [''],
      },
      {
        validator: CustomValidators.MatchingPasswords,
      } as AbstractControlOptions
    );
  }

  createUser() {
    if (this.form.valid) {
      this.user = new User(this.form.value);
      this.subscription = this.userService.createUser(this.user).subscribe({
        next: (data) => {
          let id = data?.id;
          this.uploadAvatar(id);
          this.router.navigate(['/list-user']);
        },
        error: (err) => {
          this.errorMessage = err.status + err.statusText;
          if (err.status == '401') {
            this.storageService.logout();
            this.router.navigate(['/login']);
          }
        },
      });
    }
  }

  cancel() {
    this.router.navigate(['/home']);
  }

  enableButton(): String {
    if (this.form.valid) {
      return 'button';
    } else {
      return 'disableButton';
    }
  }

  uploadAvatar(id: any): void {
    this.user.id = id;
    this.subscription = this.userService.uploadAvatar(this.user).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
