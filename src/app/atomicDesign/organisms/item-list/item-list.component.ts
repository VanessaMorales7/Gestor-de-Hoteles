import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { hotelList } from 'src/app/models/hotelList';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  public title: string = '';
  public buscarHotel: string = '';
  public item: string = '';
  public numberOption: number = 0;

  public items: any = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const subscribe = this.route.params.subscribe(params => {
      let title = '';
      title = this.route.snapshot.paramMap.get('title')!;
      this.buscarHotel = '';
      this.buscarHotel = this.route.snapshot.paramMap.get('hotelName')!;
      if(title && !this.buscarHotel){this.numberOption = 1;}
      else {this.numberOption = 2}

      this.items = null;
      switch(this.numberOption){
        case 1:
          this.title = '';
          this.title += `${title}`;
          this.items = hotelList;
          this.numberOption = 1;
        break;
        case 2:
          this.title = '';
          this.title += `${title}`;
          let huespedes = hotelList.filter((hotel: any) => hotel.name == this.buscarHotel);
          this.items = huespedes[0].guesList;
          this.numberOption = 2;
        break;
        default:
          alert('error');
          break;
      }
    })
  }
  

}
