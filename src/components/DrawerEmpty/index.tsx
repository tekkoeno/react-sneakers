import React from 'react';
import s from './DrawerEmpty.module.scss';
const DrawerEmpty = ({ imgValue, title, descr }) => {
  return (
    <div className={s.drawerEmpty}>
      <img src={imgValue} alt="cart-img" />
      <h2>{title}</h2>
      <p>{descr}</p>

      <a href="/">
        <button className="btn">Вернуться назад</button>
      </a>
    </div>
  );
};

export default DrawerEmpty;
