export type Sneaker = {
    id: string,
    imgUrl: string,
    name: string,
    count: number,
    price: number
}
export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}
export interface SneakersSliceState {
    sneakersItem: Sneaker[],
    status: Status
}