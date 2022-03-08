import { Component, Input, OnInit } from '@angular/core';
import { Collection } from 'src/app/shared/interface/collection';

@Component({
  selector: 'app-collection-preview',
  templateUrl: './collection-preview.component.html',
  styleUrls: ['./collection-preview.component.scss'],
})
export class CollectionPreviewComponent implements OnInit {
  @Input() collection: Collection;

  constructor() {}

  ngOnInit(): void {}
}
