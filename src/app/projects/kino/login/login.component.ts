import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, takeUntil } from 'rxjs';
import { FilmService } from '../film.service';
import { LoggBtnService } from '../logg-btn.service';
import { Unsubscriber } from '../unsubscriber';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends Unsubscriber  implements OnInit {

  newUser: boolean = false;
  //@ts-ignore
  logIn: FormGroup;
  noUser: boolean = false;
  get controls() {
    return this.logIn.controls;
  }
  subscribers:Subscription[] =[];

  constructor(public srv: FilmService,public loggBtnService: LoggBtnService,private router:Router) {
    super();
   }

  ngOnInit(): void {

    this.logIn = new FormGroup({
      userLogin: new FormControl('', [Validators.required, Validators.minLength(4)]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });

  }

  onSubmit() {
    localStorage['token'] = null;
    let currentUser = new User;
    currentUser.username = this.logIn.get('userLogin')?.value;
    currentUser.password = this.logIn.get('userPassword')?.value;
    this.subscribers.push(this.srv.logInUser(currentUser).pipe(takeUntil(this.$onDestroy)).subscribe({
      next: (res: any) => {
        localStorage['userId'] = res.body.id;
        let token = res.headers.get('x-auth-token');
        localStorage['token'] = token;
        this.noUser = false;
        this.logIn.reset();
        
        if (res.body.id === 0) {
          this.noUser = true;
        }
        else {
          this.loggBtnService.setLogIn(true);
          this.router.navigate(['../kino'])
        }
      },
    }));
  };
 
}
