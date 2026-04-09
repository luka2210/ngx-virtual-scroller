import { Component } from '@angular/core';
import { ListItem } from '../lists/list-item.component';
import { BaseList } from '../lists/base-list';
import { VerticalListComponent } from '../lists/vertical-list.component';
import { HorizontalListComponent } from '../lists/horizontal-list.component';
import { MultiColListComponent } from '../lists/multi-col-list.component';
import { TableListComponent } from '../lists/table-list.component';
import { ListWithApiComponent } from '../lists/list-with-api.component';

@Component({
  standalone: true,
  imports: [VerticalListComponent, HorizontalListComponent, MultiColListComponent, TableListComponent, ListWithApiComponent],
  selector: 'samples',
  templateUrl: 'samples.component.html'
})
export class SamplesComponent {

  public items: ListItem[] = [];

  constructor() {
	this.items = BaseList.generateMultipleRandomItems(10000);
  }
}
