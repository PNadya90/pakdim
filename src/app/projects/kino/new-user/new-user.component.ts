import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { FilmService } from '../film.service';
import { User } from '../login/user.model';
import { MatchPassService } from '../match-pass.service';
import { Unsubscriber } from '../unsubscriber';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent extends Unsubscriber implements OnInit {
  //@ts-ignore
  registerForm: FormGroup;
  registred=false;
  get controls() {
    return this.registerForm.controls
  };


  constructor(private srv: FilmService,
    private formBuilder: FormBuilder,
    private customValidator: MatchPassService) {
    super();
  }
  onSubmit() {
    let newUser = new User;
    newUser.username = this.registerForm.get('login')?.value;
    newUser.password = this.registerForm.get('password')?.value;
    console.log(newUser);
    this.srv.register(newUser).pipe(takeUntil(this.$onDestroy)).subscribe({
      next: (res) => {
      }
    });
    this.registerForm.reset();
    this.registred=true;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      checkPassword: ['', Validators.required],
    }, {
      validators: this.customValidator.passwordMatchValidator(
        'password',
        'checkPassword')
    });
  }

}
