import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { hotelList } from 'src/app/models/hotelList';

@Component({
  selector: 'app-modal-modifier-items',
  templateUrl: './modal-modifier-items.component.html',
  styleUrls: ['./modal-modifier-items.component.css']
})

export class ModalModifierItemsComponent implements OnInit {

  private closeResult: string = '';

  @Input() id: number = NaN;
  @Input() field1: string = '';
  @Input() field2: string = '';
  @Input() field3: string = '';
  @Input() field4: number = NaN;

  public title: string = '';
  public buscarHotel: string = '';
  @Input() numberOption: number = 0;

  @Input() items: any = [];

  constructor(private modalService: NgbModal, private route: ActivatedRoute) { }

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
          let huespedes = hotelList.filter((hotel: any) => hotel.name == this.buscarHotel);
          this.items = huespedes[0].guesList;
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
        let changeHotel = {
          name: form.value.field1,
          direction: form.value.field2,
          phone: form.value.field4,
          Estate: form.value.field3
        }
        this.items.forEach((item: any) => {
          if(item.id == this.id){
            item.name = changeHotel.name;
            item.direction = changeHotel.direction;
            item.phone = changeHotel.phone;
            item.Estate = changeHotel.Estate;
          }
        });
        break;
      case 2:
        let changeGuest = {
          name: form.value.field1,
          document: form.value.field2,
          phone: form.value.field4,
          email: form.value.field3
        }
        let huespedes = this.items.filter((hotel: any) => hotel.name == this.buscarHotel);

        this.items.filter( (item: any) => {
          if(this.id == item.id){
            item.name = changeGuest.name;
            item.document = changeGuest.document;
            item.phone = changeGuest.phone;
            item.email = changeGuest.email;
          }
        })
        break;
      default:
        alert('error');
        break;
    }
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

