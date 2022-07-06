import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacxin } from '../../models';
import { vacxin } from '../../config/data-sample';
import { VaccineService } from '~/src/app/services/vaccine.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  item!: Vacxin;
  initVacxin = vacxin;

  constructor(
    private activeRoute: ActivatedRoute,
    private vaccinService: VaccineService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.handleGetVaccinById(params['id']);
    });
  }

  handleGetVaccinById(id: string) {
    this.vaccinService.getVaccinById(id).subscribe((data) => {
      console.log(data);
      this.item = data;
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
