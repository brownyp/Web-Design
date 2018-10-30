import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from '../../services/main.service';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app.store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  public productsList;
  public genres;
  public banner;
  public searchPhrase = '';
  public showGenre;
  public showDropdown = false;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private database: MainService,
    private store: Store<AppStore>
  ) {}

  ngOnInit() {
    this.getproductsList();
    this.getGenres();
    this.setBanner();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getproductsList() {
    this.database.getproductss()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(productss => {
        this.productsList = productss;
        this.store.dispatch({type: 'LOAD_SUCCEEDED'});
      });
  }

  RateproductsList() {

        this.database.getproductss()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(productss => {

        this.productsList = productss;
      let k;
        for (var i=0;i<this.productsList.length;i++)
        {
          for(var j=0;j<this.productsList.length;j++)
          {
            if(this.productsList[i].rate>this.productsList[j].rate)
            {
              k=this.productsList[i];
              this.productsList[i]=this.productsList[j];
              this.productsList[j]=k;
            }
          }
        }
 this.store.dispatch({type: 'LOAD_SUCCEEDED'});
      });

      let s=" ";
this.onSearch(s);
  }

  LengthproductsList(){

        this.database.getproductss()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(productss => {

        this.productsList = productss;
      let k;
        for(var i=0;i<this.productsList.length;i++)
        {
          for(var j=0;j<this.productsList.length;j++)
          {
            if(this.productsList[i].length>this.productsList[j].length)
            {
              k=this.productsList[i];
              this.productsList[i]=this.productsList[j];
              this.productsList[j]=k;
            }
          }
        }
 this.store.dispatch({type: 'LOAD_SUCCEEDED'});
      });

      let s="  ";
this.onSearch(s);
  }

  PriceproductsList(){

        this.database.getproductss()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(productss => {

        this.productsList = productss;
      let k;
        for(var i=0;i<this.productsList.length;i++)
        {
          for(var j=0;j<this.productsList.length;j++)
          {
            if(this.productsList[i].price>this.productsList[j].price)
            {
              k=this.productsList[i];
              this.productsList[i]=this.productsList[j];
              this.productsList[j]=k;
            }
          }
        }
 this.store.dispatch({type: 'LOAD_SUCCEEDED'});
      });

      let s="   ";
this.onSearch(s);
  }

  getGenres(){
    this.database.getGenres()
        .takeUntil(this.ngUnsubscribe)
        .subscribe(genres => {
          this.genres = Object.keys(genres);
        });
  }

  setGenre(genre){
    this.showGenre != genre ? this.showGenre = genre : this.showGenre = null;
    this.store.dispatch({type: 'FILTER_productsS'});
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  onSearch(value){
    this.searchPhrase = value;
    this.store.dispatch({type: 'SEARCH_productsS'});
  }

  setBanner(){
    this.database.getcartproducts(24)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(products => this.banner = products);
  }

}
