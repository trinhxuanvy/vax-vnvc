import { Component, OnInit } from '@angular/core';
import { add } from 'lodash';
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
  customer!: Customer;
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
  };
  name = '';
  gender = '';
  address = '';
  district = '';
  province = '';
  commute = '';
  phone = '';
  dateOfBirth = new Date();
  code = '';
  relationShip = '';
  vaccines: Vacxin[] = [];
  centers: VCCenter[] = [];
  chooseVId = '';
  chooseVCId = '';
  injId = '';
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

  handleGetCustomerByCode() {
    this.customerService.getCustomerByCode(this.code).subscribe((data) => {
      console.log(data);
      this.customer = data;
    });
  }

  handleGetInjectorByCode() {
    if (!this.code || !this.relationShip) return;

    this.injectorService
      .getInjectorByCode({
        code: this.code,
        relationship: this.relationShip,
      })
      .subscribe((data) => {
        this.name = data.name as string;
        this.gender = data.gender as string;
        this.address = data.address as string;
        this.district = data.district as string;
        this.province = data.provice as string;
        this.commute = data.commute as string;
        this.phone = data.phone as string;
        this.dateOfBirth = data.dateOfBirth;
        this.injId = data._id as string;
        this.injectors.push(data);
      });
  }

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
    const mergeData: VCSignup = {
      vcCenterId: this.chooseVCId,
      injectorId: this.injId,
      listVaccine: mergeVc,
      status: 'Đang xủ lý',
    };

    this.vcSignupService.registerVC(mergeData).subscribe((data) => {
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
