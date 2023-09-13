import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearItem, clickOrder } from '../../redux/drawer/drawer';
import { selectDrawer } from '../../redux/drawer/selectors';
import DrawerEmpty from '../DrawerEmpty';
import DrawerItem from '../DrawerItem';
import s from './Drawer.module.scss';

const Drawer = ({ setOpen }) => {
  const { items, totalPrice } = useSelector(selectDrawer);
  const dispatch = useDispatch();
  const [isOrderSend, setIsOrderSend] = React.useState(false);
  const [orderItem, setOrderItem] = React.useState([]);

  const onClickOrder = () => {
    dispatch(clickOrder(orderItem));
    setIsOrderSend(true);
    dispatch(clearItem());
  };
  return (
    <div className={s.drawer}>
      <div className={s.drawerInner}>
        <h2 className={s.drawerTitle}>
          Корзина{' '}
          <span onClick={() => setOpen(false)}>
            <img src="img/close.svg" alt="close" />
          </span>
        </h2>
        {items.length ? (
          <>
            <div className={s.drawerContent}>
              <div className={s.drawerItems}>
                {items.map((item, index) => {
                  return <DrawerItem setOrderItem={setOrderItem} key={index} {...item} />;
                })}
              </div>

              <div className={s.priceInfo}>
                <p>
                  Итого: <span className={s.totalPrice}>{totalPrice} сом</span>
                </p>
                <p>
                  Налог 5%:{' '}
                  <span className={s.totalPrice}>{Math.round((totalPrice / 100) * 5)} сом</span>
                </p>
                <button onClick={onClickOrder} className={'btn'}>
                  Оформить заказ
                </button>
              </div>
            </div>
          </>
        ) : (
          <DrawerEmpty
            imgValue={isOrderSend ? 'img/order.jpg' : 'img/empty-cart.png'}
            title={isOrderSend ? 'Заказ оформлен!' : 'Корзина пуста'}
            descr={
              isOrderSend
                ? 'Ваш заказ скоро будет передан курьерской доставке'
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
