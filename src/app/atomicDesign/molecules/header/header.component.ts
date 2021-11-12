import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    //Toggle Click Function
    $('#toggler-btn').on('click', function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      let element = document.querySelector('#clpse-icon'); //Get element from the DOM
      let buttonChanged = element?.className.split(' ')!;  //split class of the element
      let elementChanged = buttonChanged.find(e => e === 'fa-bars'); //Then, search the class fa-bars to use for
      if (elementChanged != 'fa-bars') {
        $('.header__title').removeClass('header__title--display');
        $('#clpse-icon').toggleClass("fa-times-animated");
        $('#clpse-icon').removeClass('fa-times');
        $('#clpse-icon').addClass('fa-bars');
      } else {
        $('.header__title').addClass('header__title--display');
        $('#clpse-icon').toggleClass("fa-times-animated");
        $('#clpse-icon').removeClass('fa-bars');
        $('#clpse-icon').addClass('fa-times');
      }
    });
  }
}
