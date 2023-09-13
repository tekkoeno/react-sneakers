import React from 'react';
import Drawer from '../Drawer/Drawer';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectDrawer } from '../../redux/drawer/selectors';
import { fetchSneakers } from '../../redux/sneakers/sneakers';
import { AppDispatch } from '../../redux/store';

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = React.useState(false);
  const isMounted = React.useRef(false);
  const getSneakers = async () => {
    dispatch(fetchSneakers());
  };
  React.useEffect(() => {
    getSneakers();
  }, []);
  const { items, totalPrice } = useSelector(selectDrawer);
  const onClickCart = () => {
    setOpen(true);
    document.body.classList.add('no-scroll');
  };
  React.useEffect(() => {
    if (open === false) {
      document.body.classList.remove('no-scroll');
    }
  }, [open]);
  React.useEffect(() => {
    if (isMounted.current === false) {
      const json = JSON.stringify(items);
      const data = localStorage.setItem('drawer', json);
      return data;
    }
    isMounted.current = true;
  }, [items]);

  return (
    <>
      {open && <Drawer setOpen={setOpen} />}
      <div className={s.header}>
        <div className={s.logo}>
          <Link to="/">
            <img src="/img/logo.png" alt="logo" />
          </Link>
          <div className={s.logoContent}>
            <h2>MORON SNEAKERS</h2>
            <h3>Магазин лучших кроссовок</h3>
          </div>
        </div>
        <div className={s.options}>
          <div className={s.cartIcon} onClick={onClickCart}>
            <img src="/img/cart.svg" alt="" />
            <span className={s.price}>{totalPrice} сом</span>
          </div>
          <Link to="/buy">
            <img src="/img/user.svg" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
