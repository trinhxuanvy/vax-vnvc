import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {
  Customer,
  CustomVaccine,
  Injector,
  Vacxin,
  VCCenter,
  VCSignup,
} from '../../models';
import { CustomerService } from '../../services/customer.service';
import { InjectorService } from '../../services/injector.service';
import { VaccineService } from '../../services/vaccine.service';
import { VccenterService } from '../../services/vccenter.service';
import { VcsignupService } from '../../services/vcsignup.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  cusClose = 'close';
  vacxins: Vacxin[] = [];
  customer: Customer = {
    _id: '',
    name: '',
    phone: '',
    address: '',
    province: '',
    commute: '',
    district: '',
    identity: '',
  };
  injectors: Injector[] = [];
  currentInjector: Injector = {
    _id: '',
    dateOfBirth: '',
    name: '',
    gender: '',
    phone: '',
    address: '',
    provice: '',
    commute: '',
    district: '',
    relationship: '',
    code: 'NPHUNGTHINH2601',
  };
  code = '';
  vaccines: Vacxin[] = [];
  centers: VCCenter[] = [];
  chooseVId = '';
  chooseVCId = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private customerService: CustomerService,
    private injectorService: InjectorService,
    private vaccineService: VaccineService,
    private vcCenterService: VccenterService,
    private vcSignupService: VcsignupService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.handleGetVaccine();
    this.handleGetVCCenter();
    this.handleGetDataLocal();
  }

  handleGetCustomerByCode() {}

  handleGetVCCenter() {
    this.vcCenterService
      .getAllCenter()
      .subscribe((data) => (this.centers = data.entities));
  }

  handleGetVaccine() {
    this.vaccineService
      .getVaccins({ search: '', categoryId: '', type: '' })
      .subscribe((data) => {
        this.vaccines = data.entities;
      });
  }

  handleGetDataLocal() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.vacxins = JSON.parse(cartData);
    }
  }

  handleGetInjectorByCode() {}

  handleRemoveFromCart(e: any) {
    this.vacxins = this.vacxins.filter((item) => item._id !== e);
    localStorage.setItem('cart', JSON.stringify(this.vacxins));
  }

  handleAddToCart() {
    const indexCartItem = this.vacxins.findIndex(
      (item) => item._id === this.chooseVId
    );

    this.vaccines.forEach((item) => {
      if (item._id === this.chooseVId) {
        let vacxinItemIndex = this.vacxins.findIndex(
          (vacI) => vacI._id === this.chooseVId
        );
        if (indexCartItem < 0) {
          this.vacxins.push(item);
        }
      }
    });

    localStorage.setItem('cart', JSON.stringify(this.vacxins));
  }

  handleSubmitRegister() {
    const date = new Date();
    const mergeVc: CustomVaccine[] = this.vacxins.map((item) => {
      return {
        vaccineId: item._id as string,
        vaccineName: item.vaccineName as string,
        source: item.source as string,
        summary: item.summary as string,
        prevention: item.prevention,
        injectedDate: moment(date.setDate(date.getDate() + 30)).format('L'),
      };
    });

    this.vcSignupService.registerVC({}).subscribe((data) => {
      let snackbarTitle = '';
      if (!data?.message) {
        snackbarTitle = 'Đăng ký thành công';
        this.vacxins = [];
        localStorage.removeItem('cart');
      } else {
        snackbarTitle =
          'Đăng ký không thành công, vui lòng kiểm tra lại thông tin';
      }
      this.snackBar.open(snackbarTitle, 'Đóng', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000,
        panelClass: ['v-bg-primary-2', 'v-c-light'],
      });
    });
  }
}
