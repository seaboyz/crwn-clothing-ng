import { Component, Input, OnInit } from '@angular/core';
import { ShopItem } from 'src/app/shared/interface/shop-item';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss'],
})
export class CollectionItemComponent implements OnInit {
  @Input() product?: ShopItem;

  constructor() {}

  ngOnInit(): void {}

  url(url: string) {
    return `url(${url})`;
  }
}
