import { Injectable } from '@angular/core';
import { takeUntil } from 'rxjs';
import { FilmService } from './film.service';
import { Unsubscriber } from './unsubscriber';

@Injectable({
  providedIn: 'root'
})

export class LoggBtnService extends Unsubscriber {

  public isLoggedIn: boolean = false;
  constructor(private filmService: FilmService) {
    super();
    let id = localStorage['userId'];
    if (id != null) {
      filmService.likedFilms(id).pipe(takeUntil(this.$onDestroy)).subscribe(
        {
          next: (res: any) => {
            if (res && res.user && res.user.id) {
              this.isLoggedIn = true;
            }
          },
          error: (err) => { }
        })
    }
  }

  setLogIn(val: boolean) {
    this.isLoggedIn = val;

  }

}
