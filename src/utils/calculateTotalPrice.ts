import { DrawerItem } from './../redux/drawer/types';

export const calculateTotalPrice = (items: DrawerItem[]) => {
  return items.reduce((obj, sum) => sum.price + obj, 0)
}


