import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Vacxin } from '../../models/index';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() item!: Vacxin;
  @Output() chooseItem = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleConvertToVND(value: number) {
    return Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(value);
  }

  handleClickChoose() {
    this.chooseItem.emit(this.item.id);
  }
}
