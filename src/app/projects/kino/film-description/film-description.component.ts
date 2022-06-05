import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';
import { FilmService } from '../film.service';
import { Unsubscriber } from '../unsubscriber';

@Component({
  selector: 'app-film-description',
  templateUrl: './film-description.component.html',
  styleUrls: ['./film-description.component.scss']
})
export class FilmDescriptionComponent extends Unsubscriber implements OnInit {

  constructor(private router: ActivatedRoute, private filmService: FilmService) {
    super();
   }

  imdbID: any;
  filmInfo: any;
  userFilms: any = [];
  liked: any;


  ngOnInit(): void {
    this.router.params.subscribe((data: any) => {
      this.imdbID = data.id;
      // console.log(data.id);
    })
    
    this.filmService.getFilmByImdbID(this.imdbID).pipe(takeUntil(this.$onDestroy)).subscribe((res: any) => {
      this.filmInfo = res.film;
      console.log(this.filmInfo);
    })
    this.filmService.isFilmLiked(this.imdbID).pipe(takeUntil(this.$onDestroy)).subscribe((res) => {
      console.log(res);
      this.liked = res;
    })

  }

  onErr(event: any) {
    event.target.src = '/assets/img/kino.jpg';
  }


  likeFilm(id: any) {
    this.liked = !this.liked;
    this.filmService.addToLike(id).pipe(takeUntil(this.$onDestroy)).subscribe((res)=>{
      console.log(res);
      
    })
  }

  changeFill(imdbID: any): any {
    this.filmInfo((element: any) => {
      console.log(element.imdbID);
      if (element.imdbID === imdbID) {
        element.isLiked = !element.isLiked;
      }
    });
  }

}
