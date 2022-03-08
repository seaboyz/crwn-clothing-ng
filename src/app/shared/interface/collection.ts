import { ShopItem } from './shop-item';

export interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: ShopItem[];
}
