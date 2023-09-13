import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../redux/drawer/drawer';
import { DrawerItem } from '../../redux/drawer/types';
import s from './SneakerItem.module.scss';

const SneakerItem: React.FC<DrawerItem> = ({ id, count, imgUrl, name, price }) => {
  const dispatch = useDispatch();
  const [clickBtn, setClickBtn] = React.useState(false);

  const onAddToDrawer = () => {
    const item = {
      id,
      name,
      price,
      imgUrl,
      count,
    };
    dispatch(addItem(item));
    setClickBtn((currentValue) => !currentValue);
    if (clickBtn === true) {
      dispatch(removeItem(id));
    }
  };
  return (
    <div className={s.sneaker}>
      <img width={133} src={imgUrl} alt="" />
      <h2>{name}</h2>
      <div className={s.infoDown}>
        <div className={s.price}>
          <h3>Цена:</h3>
          <p>{price} сом.</p>
        </div>
        <div>
          <img
            onClick={onAddToDrawer}
            src={`/img/btn-${clickBtn ? 'checked' : 'plus'}.svg`}
            alt="btn"
          />
        </div>
      </div>
    </div>
  );
};

export default SneakerItem;
