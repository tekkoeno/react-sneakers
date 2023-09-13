export type DrawerItem = {
    id: string,
    name: string,
    price: number,
    imgUrl: string,
    count: number,
}
export interface DrawerItemSlice {
    items: DrawerItem[],
    totalPrice: number,
    orderItems: DrawerItem[]
}