import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/drawer/drawer';
import s from './DrawerItem.module.scss';

const DrawerItem = ({ setOrderItem, id, name, imgUrl, price, count }) => {
  const obj = {
    id,
    name,
    imgUrl,
    price,
    count,
  };
  React.useEffect(() => {
    setOrderItem(obj);
  }, []);
  const dispatch = useDispatch();
  const onClickRemove = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div className={s.item}>
      <img src={imgUrl} alt="sneaker" />
      <h2 className={s.name}>
        {name}
        <span className={s.price}>{price} сом</span>
      </h2>
      <button onClick={() => onClickRemove(id)}>
        <img src="/img/btn-remove.svg" alt="btn-remove" />
      </button>
    </div>
  );
};

export default DrawerItem;
