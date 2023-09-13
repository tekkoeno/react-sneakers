import { DrawerItem } from './../redux/drawer/types';
import { calculateTotalPrice } from './calculateTotalPrice';
export const getDrawerFromLS = () => {
    const json = localStorage.getItem('drawer');
    const items = JSON.parse(json);
    const totalPrice = calculateTotalPrice(items);
    const orderItems = []

    return {
        items: items as DrawerItem[],
        totalPrice,
        orderItems: orderItems as DrawerItem[]
    }
}