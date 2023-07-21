import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { SharedService } from '../../common/shared.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {
  comp1Val: string;
  comp2Val: string;
  checkingData: any;

  constructor(private sharedService: SharedService) {
    this.sharedService.comp1Val = 'Component 1 initial value';
  }
  ngOnInit() {
    this.sharedService.testBS.subscribe((date) => (this.checkingData = date));
  }

  ngAfterContentChecked() {
    this.checkingData = this.sharedService.value1;
    this.comp2Val = this.sharedService.comp2Val;
  }

  addValue(str) {
    this.sharedService.updateComp1Val(str);
  }
}
