import { Component, AfterContentChecked } from '@angular/core';
import { SharedService } from '../../common/shared.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
})
export class Component2Component implements AfterContentChecked {
  comp1Val: string;
  comp2Val: string;

  constructor(private sharedService: SharedService) {
    this.sharedService.comp2Val = 'Component 2 initial value';
  }

  ngAfterContentChecked() {
    this.comp1Val = this.sharedService.comp1Val;
  }

  addValue(str) {
    this.sharedService.updateComp2Val(str);
  }
  updateData(value) {
    this.sharedService.updateEnteredData(value);
    console.log(value);
  }
}
