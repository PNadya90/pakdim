import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './login/user.model';
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  searchFilm(filmName: string) {
    let clid = localStorage['id'];
    return this.http.get<any>('https://s1.pakdim.com/api/searchFilms?name=' + filmName);
  }

  register(newUserInfo: User) {
    let clid = localStorage['id'];
    return this.http.
      post('https://s1.pakdim.com/register', newUserInfo)
  }

  logInUser(currentUser: User) {
    let base64 = window.btoa(currentUser.username + ":" + currentUser.password);
    return this.http.get<any>('https://s1.pakdim.com/getCurrentUser', {
      headers: { Authorization: 'Basic ' + base64 }, observe: 'response'
    })
  }

  likedFilms(currentUserId: any) {
    return this.http.get('https://s1.pakdim.com/api/getUserData/' + currentUserId)
  }
  getCurrentUser() {
    return this.http.get('https://s1.pakdim.com/getCurrentUser')
  }

  getFilmByImdbID(imdbID: any) {
    return this.http.get('https://s1.pakdim.com/api/getFilmByImdbID?imdbID=' + imdbID)
  }

  isFilmLiked(filmId: any) {
    return this.http.get('https://s1.pakdim.com/api/isFilmLiked/' + filmId)
  } 
  addToLike(filmId: any) {
    let body = {
      "imdbID":filmId
  }
    return this.http.post('https://s1.pakdim.com/api/addToLiked',body)
  } 
}
