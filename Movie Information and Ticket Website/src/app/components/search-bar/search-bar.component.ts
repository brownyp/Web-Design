import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  @Output() searchChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    Observable.fromEvent(
      this.searchInput.nativeElement, 'keyup'
    )
    .debounceTime(500)
    .distinctUntilChanged()
    .map(
      (event: KeyboardEvent) => 
        (<HTMLInputElement>event.target).value
      
    ).subscribe(value => this.searchChange.emit(value));
  }

}
