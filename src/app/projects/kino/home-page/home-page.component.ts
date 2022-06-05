import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { FilmService } from '../film.service';
import { Unsubscriber } from '../unsubscriber';

interface Films {
  Response: any;
  Search: [{
    Poster: any;
    Title: any;
    Type: any;
    Year: any;
    imdbID: any;
    isLiked?: boolean
  }];

  totalResult: any;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent extends Unsubscriber implements OnInit{

  films: Films = {
    Response: '',
    Search: [{
      Poster: '',
      Title: '',
      Type: '',
      Year: '',
      imdbID: '',      
    }],
    totalResult: '',
  };

  filmName='';
  tableItem: any;
  myLikedFilms:any = {};

  constructor(private filmService: FilmService) {    
    super();
   }
  
  ngOnInit(): void {
    if(localStorage['userId']!=null){
      console.log(localStorage['userId']);
      
      this.filmService.likedFilms(localStorage['userId'])
      .pipe(takeUntil(this.$onDestroy)).subscribe({next:(res: any) => {
          res.likedFilms.map((el:any)=>{return el.imdbID}).forEach((el:any)=>{
          this.myLikedFilms[el]=true;     
        })     
      },error:err=>{}})
    }   
  }

  searchFilm(event: any) {
    if (event == '' || event == null) {
      this.tableItem = [];
    }

    this.filmService.searchFilm(event).pipe(takeUntil(this.$onDestroy)).subscribe(
      {
        next: (films: Films) => {
          // console.log(this.myLikedFilms);
          if (films) {
            this.tableItem = films.Search;
            this.tableItem.forEach((el:any)=>{ 
              if(this.myLikedFilms[el.imdbID]){
                el.isLiked = true;
              }
            })
            // console.log(films);
          }
        },
        error: (errorFunction: any) => {
          console.log(errorFunction);
        }
      }
    )
  }

  onErr(event: any) {
    event.target.src = '/assets/img/kino.jpg'
  }

  likeFilm(id: any) {
    if(this.myLikedFilms[id] === undefined){
      this.myLikedFilms[id] = true;
    } else if (this.myLikedFilms[id]){
      this.myLikedFilms[id]=false;
    } else {
      this.myLikedFilms[id] = true;
    }

    this.filmService.addToLike(id).pipe(takeUntil(this.$onDestroy)).subscribe({
      next: (likedFilm) => {
      }
    })
    this.changeFill(id);
  }

  changeFill(imdbID: any):any {
    this.tableItem.forEach((element:any) => {
      if(element.imdbID === imdbID){
        element.isLiked = !element.isLiked;
      }
    });
  }
}

