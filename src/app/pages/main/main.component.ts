import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounce } from 'rxjs';
import { cloneDeep } from 'lodash';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { DASHBOARD } from '~/src/app/config/dashboard';
import { Vacxin } from '../../models/index';
import { Dashboard, OptionDashboard } from '../../config/interfaces';
import { FILTERS } from '../../config/filters';
import { FORMAT_VACXIN } from '../../config/enum';
import { vacxin } from '../../config/data-sample';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  dashboards = DASHBOARD;
  filters = FILTERS;
  currentNode!: Dashboard;
  initVacxins = vacxin;
  vacxins: Vacxin[] = [];
  finalVacxins: Vacxin[] = [];
  cart: Vacxin[] = [];
  filterCode = 0;
  search = '';
  actionTitle = '';
  snackbarTitle = '';
  optionLottie: AnimationOptions = {
    path: '/assets/animations/no-data.json',
  };
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.vacxins = cloneDeep(this.initVacxins);
    this.finalVacxins = cloneDeep(this.initVacxins);
    this.handleDashboard();
    this.handleCheckExistCartItem(this.cart, this.vacxins);
  }

  handleDashboard() {
    this.dashboards.forEach((item, index, obj) => {
      if (item.children) {
        obj[index].children?.forEach((child, indexChild, objChild) => {
          objChild[indexChild].subTitle = item.title + ' / ' + child.title;
          objChild[indexChild].typeVacxin = item.typeVacxin;
        });
      }
    });
    console.log(this.dashboards);
  }

  handleChooseDashboard(item: Dashboard) {
    this.actionTitle = item.title as string;
    this.finalVacxins = this.vacxins.filter(
      (data) => data.typeVacxin === item.typeVacxin
    );
  }

  handleChooseOptionDashboard(item: OptionDashboard) {
    this.actionTitle = item.subTitle as string;
    this.finalVacxins = this.vacxins.filter((data) => {
      console.log(data, item);
      data.typeOption === item.typeOption &&
        data.typeVacxin === item.typeVacxin;
    });
  }

  handleClearDashboard() {
    this.actionTitle = '';
    this.finalVacxins = cloneDeep(this.vacxins);
  }

  hanldeClickNodeDashboard(path: string) {
    this.currentNode = this.dashboards.filter((item) => item.path === path)[0];
  }

  handleSearchBox(e: any) {
    this.finalVacxins = this.vacxins.filter((item) =>
      item.title?.toLocaleLowerCase().includes(e.target.value)
    );
  }

  handleChangeFilter(e: any) {
    this.filterCode = e;
    if (e !== FORMAT_VACXIN.All) {
      this.finalVacxins = this.vacxins.filter(
        (item) => item.formatVacxin === e
      );
    } else {
      this.finalVacxins = cloneDeep(this.vacxins);
    }
  }

  handleClickAddToCart(e: string) {
    const indexCartItem = this.cart.findIndex((item) => item.id === e);

    this.initVacxins.forEach((item) => {
      if (item.id === e) {
        let vacxinItemIndex = this.vacxins.findIndex((vacI) => vacI.id === e);
        if (indexCartItem < 0) {
          this.vacxins[vacxinItemIndex].isChoose = true;
          this.cart.push(item);
        } else {
          this.vacxins[vacxinItemIndex].isChoose = false;
          this.cart = this.cart.filter((item) => item.id !== e);
        }
      }
    });

    this.handleGetVacxinByType();
  }

  handleCheckExistCartItem(cart: Vacxin[], vacxinList: Vacxin[]) {
    for (let i = 0; i < cart.length; i++) {
      for (let j = 0; j < vacxinList.length; j++) {
        if (cart[i].id === vacxinList[j].id) {
          vacxinList[j].isChoose = true;
        } else {
          vacxinList[j].isChoose = false;
        }
      }
    }
  }

  handleRemoveFromCart(e: string) {
    this.vacxins.forEach((item, index, obj) => {
      if (item.id === e) {
        obj[index].isChoose = !item.isChoose;
        this.cart = this.cart.filter((cartItem) => cartItem.id !== e);
      }
    });

    this.handleGetVacxinByType();
  }

  handleGetVacxinByType() {
    if (this.filterCode === FORMAT_VACXIN.All) {
      this.finalVacxins = cloneDeep(this.vacxins);
    } else {
      this.finalVacxins = cloneDeep(
        this.vacxins.filter((item) => item.formatVacxin === this.filterCode)
      );
    }
  }

  handlePaymentCart() {
    if (!this.cart.length) {
      this.snackbarTitle = 'Vui lòng chọn 1 loại vắc xin trước khi thanh toán.';
      this.snackBar.open(this.snackbarTitle, 'Đóng', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000,
        panelClass: ['v-bg-primary-2', 'v-c-light'],
      });
      return;
    }

    this.router.navigate(['/payment']);
  }
}
