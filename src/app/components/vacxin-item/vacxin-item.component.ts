import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vacxin } from '../../models/index';

@Component({
  selector: 'app-vacxin-item',
  templateUrl: './vacxin-item.component.html',
  styleUrls: ['./vacxin-item.component.scss'],
})
export class VacxinItemComponent implements OnInit {
  @Input() item!: Vacxin;
  @Output() clearItem = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleConvertToVND(value: any) {
    return Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(value);
  }

  handleClearItem() {
    this.clearItem.emit(this.item._id);
  }
}
