import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacxin } from '../../models';
import { vacxin } from '../../config/data-sample';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  item!: Vacxin;
  initVacxin = vacxin;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.item = this.initVacxin.filter((data) => data.id === params['id'])[0];
      console.log(params, this.item);
    });
  }

  handleConvertToVND(value: any) {
    return Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(value);
  }

  handleAddToCart() {}
}
