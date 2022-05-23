import {Component} from '@angular/core';

/** @title Drawer with explicit backdrop setting */
@Component({
  selector: 'sidenav-backdrop-example',
  templateUrl: 'sidenav-backdrop-example.html',
  styleUrls: ['sidenav-backdrop-example.css'],
})
export class SidenavBackdropExample {
  stateofsidenav : boolean = false

  changestateofSidenav()
  {
    this.stateofsidenav = !this.stateofsidenav
  }
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */