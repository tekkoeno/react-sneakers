import React from 'react';
import { useSelector } from 'react-redux';
import { selectDrawer } from '../redux/drawer/selectors';

const Cart = () => {
  const { orderItems } = useSelector(selectDrawer);
  return (
    <div className="cart">
      <h2 className="title cart__title">Мои покупки</h2>
      <div className="cart__content">
        {orderItems.map((item, index) => {
          return (
            <div key={index} className="cart__sneaker">
              <img width={133} src={item.imgUrl} alt="image-sneaker" />
              <h2>{item.name}</h2>
              <div className="cart__info-down">
                <div className="cart__price">
                  <h3>Цена:</h3>
                  <p>{item.price} сом</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
