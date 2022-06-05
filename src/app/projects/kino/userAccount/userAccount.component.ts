import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { FilmService } from '../film.service';
import { Unsubscriber } from '../unsubscriber';

@Component({
  selector: 'app-user-account',
  templateUrl: './userAccount.component.html',
  styleUrls: ['./userAccount.component.scss']
})
export class UserAccountComponent extends Unsubscriber implements OnInit {

  userFilms: any = [];

  constructor(private filmService: FilmService) {
    super();
   }

  ngOnInit() {
    this.userFilms = [];
    let userId = localStorage['userId'];
    this.filmService.likedFilms(userId).pipe(takeUntil(this.$onDestroy)).subscribe((res: any) => {
      let idFilms = res.likedFilms;
      for (let i = 0; i < idFilms.length; i++) {
        this.filmService.getFilmByImdbID(idFilms[i].imdbID).pipe(takeUntil(this.$onDestroy)).subscribe((res: any) => {
          res.film.isLiked = true;
          this.userFilms.push(res.film);
        })
      }
    })
  }

  onErr(event: any) {
    event.target.src = '/assets/img/kino.jpg';
  }

  likeFilm(imdbID: any) {
    this.changeFill(imdbID);
    this.filmService.addToLike(imdbID).pipe(takeUntil(this.$onDestroy)).subscribe((result) => {
    })
  }

  changeFill(imdbID: any): any {
    this.userFilms.forEach((element: any) => {
      console.log(element.imdbID);
      if (element.imdbID === imdbID) {
        element.isLiked = !element.isLiked;
      }
    });
  }
  
}

