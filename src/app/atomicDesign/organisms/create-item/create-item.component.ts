import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { guest } from 'src/app/models/guest';
import { hotel } from 'src/app/models/hotel';
import { hotelList } from 'src/app/models/hotelList';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  public title: string = '';
  public numberOption: number = 0; // Determinates the menu to know if we need Hotel options or guest options, and add more options in the future
  public buscarHotel: string = '';

  public field1: string = '';
  public field2: string = '';
  public field3: string = '';
  public field4: string = '';
  public image: string = ''; //Modify

  public items: any = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const subscribe = this.route.params.subscribe(params => {
      let title = '';
      title = this.route.snapshot.paramMap.get('title')!;
      this.buscarHotel = '';
      this.buscarHotel = this.route.snapshot.paramMap.get('hotelName')!;
      if(title && !this.buscarHotel){this.numberOption = 1;}
      else {this.numberOption = 2; title = 'Huesped'}

      this.items = null;
      switch(this.numberOption){
        case 1:
          this.title = '';
          this.title += `${title}`;
          this.items = hotelList;
          this.image = hotel.image; //Modify
          this.field1 = hotel.name;
          this.field2 = hotel.direction;
          this.field3 = hotel.Estate;
          this.field4 = hotel.phone;
        break;
        case 2:
          this.title = '';
          this.title += `${title}`; 
          let huespedes = hotelList.filter((hotel: any) => hotel.name == this.buscarHotel);
          this.items = huespedes[0].guesList;
          this.image = hotel.image; //Modify
          this.field1 = guest.name;
          this.field2 = guest.document;
          this.field3 = guest.email;
          this.field4 = guest.phone;
        break;
        default:
          alert('error');
        break;
      }
    })
  }

  saveData(form: NgForm){
    switch (this.numberOption) {
      case 1:
        let newHotel = {
          id: hotelList.length + 1,
          image: form.value.image, //modify
          name: form.value.field1,
          direction: form.value.field2,
          phone: form.value.field4,
          Estate: form.value.field3,
          guesList: []
        }
        hotelList.push(newHotel);
        break;
      case 2:
        let newGuest = {
          id: this.items.length + 1,
          image: form.value.image, //modify
          name: form.value.field1,
          document: form.value.field2,
          phone: form.value.field4,
          email: form.value.field3
        }
        let huespedes = hotelList.filter((hotel: any) => hotel.name == this.buscarHotel);
        huespedes[0].guesList.push(newGuest);
        break;
      default:
        alert('error');
        break;
    }
  }

}
