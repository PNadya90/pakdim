import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MyType } from "./myType.modal";


@Injectable({
   providedIn: 'root'
 })
export class BooksService {
   constructor(private http: HttpClient) { }

   getTable() {
      return this.http.get('https://s1.pakdim.com/publicApi/books');
   }

   postRequest(id: any, countToBuy: any) {
      return this.http.post<MyType>('https://s1.pakdim.com/publicApi/buyBook/' + id + '?qty=-' + countToBuy, null)
   }

   getMessage(idOrder: number) {
      return this.http.get<{ id: number | undefined, status: string | undefined, message: string | null | undefined }>('https://s1.pakdim.com/publicApi/order/' + idOrder)
   }

   putBook(newBook: { bookName: any; authorName: any; quantity: any; }) {
      return this.http.put('https://s1.pakdim.com/publicApi/addBook', newBook)
   }

   searchBook (bookName: string | undefined) {
      return this.http.get<MyType>('https://s1.pakdim.com/publicApi/books/' + bookName)
   }

}