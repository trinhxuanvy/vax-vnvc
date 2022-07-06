import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounce, map, flatMap, interval } from 'rxjs';
import { cloneDeep } from 'lodash';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Vacxin } from '../../models/index';
import { Dashboard, QuerySearchObject } from '../../config/interfaces';
import { FILTERS } from '../../config/filters';
import { FORMAT_VACXIN } from '../../config/enum';
import { vacxin } from '../../config/data-sample';
import { VaccineService } from '~/src/app/services/vaccine.service';
import { CategoryService } from '~/src/app/services/category.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  dashboards: Dashboard[] = [];
  filters = FILTERS;
  currentNode!: Dashboard;
  initVacxins: Vacxin[] = [];
  vacxins: Vacxin[] = [];
  finalVacxins: Vacxin[] = [];
  cart: Vacxin[] = [];
  filterCode = 'All';
  search = '';
  actionTitle = '';
  snackbarTitle = '';
  optionLottie: AnimationOptions = {
    path: '/assets/animations/no-data.json',
  };
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  querySearch: QuerySearchObject = {
    search: '',
    categoryId: '',
    type: '',
  };

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private vaccinService: VaccineService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.handleGetDashBoard();
    this.handleInitData();
    this.vacxins = cloneDeep(this.initVacxins);
    this.finalVacxins = cloneDeep(this.initVacxins);
    this.handleCheckExistCartItem(this.cart, this.vacxins);
  }

  handleGetDashBoard() {
    this.categoryService.getCategories().subscribe((data) => {
      this.dashboards = data;
    });
  }

  handleGetCartLocal() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
      this.cart.forEach((c) => {
        this.finalVacxins.forEach((f, i, o) => {
          if (c._id === f._id) {
            o[i].isChoose = true;
          }
        });
      });
    }
  }

  handleInitData() {
    this.vaccinService
      .getVaccins(this.querySearch)
      .pipe(debounce(() => interval(500)))
      .subscribe((data) => {
        this.initVacxins = data.entities;
        this.vacxins = cloneDeep(this.initVacxins);
        this.finalVacxins = cloneDeep(this.initVacxins);
        this.handleGetCartLocal();
        this.handleCheckExistCartItem(this.cart, this.vacxins);
      });
  }

  handleChooseDashboard(item: Dashboard) {
    this.actionTitle = item.categoryName as string;

    this.querySearch = {
      ...this.querySearch,
      categoryId: item._id,
    };
    this.handleInitData();
  }

  handleChooseDashboardChildren(parent: Dashboard, children: Dashboard) {
    this.actionTitle = parent.categoryName + ' / ' + children.categoryName;
    this.actionTitle = children.categoryName as string;

    this.querySearch = {
      ...this.querySearch,
      categoryId: children._id,
    };
    this.handleInitData();
  }

  // handleChooseOptionDashboard(item: OptionDashboard) {
  //   this.actionTitle = item.subTitle as string;
  //   this.finalVacxins = this.vacxins.filter((data) => {
  //     console.log(data, item);
  //     data.typeOption === item.typeOption &&
  //       data.typeVacxin === item.typeVacxin;
  //   });
  // }

  handleClearDashboard() {
    this.actionTitle = '';
    this.querySearch = {
      ...this.querySearch,
      categoryId: '',
    };
    this.handleInitData();
  }

  hanldeClickNodeDashboard(path: string) {
    // this.currentNode = this.dashboards.filter((item) => item.path === path)[0];
  }

  handleSearchBox(e: any) {
    this.querySearch = {
      ...this.querySearch,
      search: e.target.value,
    };
    this.handleInitData();
  }

  handleChangeFilter(e: any) {
    this.querySearch = {
      ...this.querySearch,
      type: e,
    };

    this.handleInitData();
  }

  handleClickAddToCart(e: string) {
    const indexCartItem = this.cart.findIndex((item) => item._id === e);

    this.initVacxins.forEach((item) => {
      if (item._id === e) {
        let vacxinItemIndex = this.vacxins.findIndex((vacI) => vacI._id === e);
        if (indexCartItem < 0) {
          this.vacxins[vacxinItemIndex].isChoose = true;
          this.cart.push(item);
        } else {
          this.vacxins[vacxinItemIndex].isChoose = false;
          this.cart = this.cart.filter((item) => item._id !== e);
        }
      }
    });

    localStorage.setItem('cart', JSON.stringify(this.cart));

    this.handleGetVacxinByType();
  }

  handleCheckExistCartItem(cart: Vacxin[], vacxinList: Vacxin[]) {
    for (let i = 0; i < cart.length; i++) {
      for (let j = 0; j < vacxinList.length; j++) {
        if (cart[i]._id === vacxinList[j]._id) {
          vacxinList[j].isChoose = true;
        } else {
          vacxinList[j].isChoose = false;
        }
      }
    }
  }

  handleRemoveFromCart(e: string) {
    this.vacxins.forEach((item, index, obj) => {
      if (item._id === e) {
        obj[index].isChoose = false;
        this.cart = this.cart.filter((cartItem) => cartItem._id !== e);
      }
    });

    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.handleGetVacxinByType();
  }

  handleGetVacxinByType() {
    if (this.filterCode === FORMAT_VACXIN.All) {
      this.finalVacxins = cloneDeep(this.vacxins);
    } else {
      this.finalVacxins = cloneDeep(
        this.vacxins.filter((item) => item.sellType === this.filterCode)
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
