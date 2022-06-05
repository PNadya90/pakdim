import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BooksService } from './books.service';
import { MyType } from './myType.modal';

@Component({
  selector: 'app-stanley',
  templateUrl: './stanley.component.html',
  styleUrls: ['./stanley.component.scss']
})
export class StanleyComponent implements  OnInit {

  tableItem: MyType | undefined;
  count = 0;
  idOrder: number | undefined = 0;
  orderId: any;
  orderStatus: any;
  orderMessage: any;
  form!: FormGroup;
  bookName: any;
  interval: any;

  constructor(private booksService: BooksService) { }

  myFilter() {
    //@ts-ignore
    this.tableItem?.bookList = this.tableItem?.bookList?.filter((el: any) => {
      el.countToBy = 0
      console.log(el)
      return el.quantity;
    })
  }

  ngOnInit() {
    this.booksService.getTable().subscribe((response) => {
      this.tableItem = response;
      this.myFilter();
    })

    this.form = new FormGroup({
      bookName: new FormControl(''),
      authorName: new FormControl(''),
      quantity: new FormControl()
    })
  }

  counter(item: any, type: string) {
    if (type == 'add') {
      if (item.quantity <= item.countToBy || item.countToBy < 0) {
        return
      }
    }
    if (type == 'minus') {
      if (item.quantity == 0 || item.countToBy == 0) {
        return
      }
    }
    type === 'add' ? item.countToBy++ : item.countToBy--
  };

  buyBook(item: any) {
    this.booksService.postRequest(item.id, item.countToBy).subscribe((response) => {
      this.idOrder = response.id;

    })

    this.interval = setInterval(() => {
      this.booksService.getMessage(this?.idOrder!).subscribe((response) => {
        this.orderId = response.id;
        this.orderStatus = response.status;
        this.orderMessage = response.message;
        if (this.orderStatus == 'COMPLETED') {
          this.ngOnInit()
          clearInterval(this.interval);
        }
      })
    }, 1000);
  }

  onSubmit() {
    let bookName = this.form.controls['bookName'].value;
    let authorName = this.form.controls['authorName'].value;
    let quantity = this.form.controls['quantity'].value;
    let newBook = { 'bookName': bookName, 'authorName': authorName, 'quantity': quantity }
    this.booksService.putBook(newBook).subscribe((response) => {
      this.tableItem != response;
      this.ngOnInit();
    })
  }

  // Search() {
  //   console.log('work!')
  //   if (this.bookName == "") {
  //     this.ngOnInit();
  //   } else {
  //     //@ts-ignore
  //     this.tableItem?.bookList = this.tableItem?.bookList.filter(res => {
  //       return res?.book?.bookName?.toLowerCase().includes(this.bookName.toLowerCase())
  //     })
  //   }
  // }

  SearchBook() {
    this.booksService.searchBook(this.bookName).subscribe((response) => {
      this.tableItem = response;
      this.myFilter();
      this.ngOnInit
    })
  }
}
