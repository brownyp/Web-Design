import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Routes, RouterModule} from '@angular/router';
import {Router} from '@angular/router';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  warning:  string;
  constructor(private router: Router,
              private shoppingCartService: ShoppingCartService) { }
  ngOnInit() {
  }
checkIfUserValid() {

  $.ajax({


    url: 'http://localhost:9999',
    data: { 'userName' : this.userName , 'password' : this.password },
    type: 'POST',
    dataType: 'json',
    async: true,
    timeout: 5000,
    complete: function() {
      console.log('end');
    },
    success: function(data, textStatus, jqXHR) {
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    },
    error: function(textStatus, jqXHR) {
      console.log('error');
      console.log(textStatus);
      console.log(jqXHR);
    }
  });


  const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:1337/', true);

    xhr.onreadystatechange = () => {
      if ( xhr.readyState === 4) {
        if ( xhr.status === 200) {
          if ( xhr.responseText === 'find') {
            this.warning = ' ';
             alert('success');
             this.shoppingCartService.CART_KEY = this.userName;
             // gai
             // this.warning = 'haha';
            this.router.navigate(['main']);
          }else {
            this.warning = 'invalid useraccount!';
          }
        }
      }
    };
    xhr.send(null);
  }



}
