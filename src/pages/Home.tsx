import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import SneakerItem from '../components/SneakerItem/SneakerItem';
import { selectSneakers } from '../redux/sneakers/selectors';
import { fetchSneakers } from '../redux/sneakers/sneakers';
import { AppDispatch } from '../redux/store';

const Sneakers = () => {
  const { sneakersItem } = useSelector(selectSneakers);
  const [searchValue, setSearchValue] = React.useState('');
  const dispatch = useDispatch<AppDispatch>();
  const getSneakers = async () => {
    dispatch(fetchSneakers());
  };
  React.useEffect(() => {
    getSneakers();
  }, []);
  return (
    <div className="sneakers">
      <div className="content__top">
        <img src="/img/slider-img.png" alt="banner" />
      </div>
      <div className="content__middle">
        <h2 className="title">
          {searchValue ? `Все кросовки по имени: ${searchValue}` : 'Все кроссовки'}
        </h2>
        <div className="content__input">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="content__items">
        {sneakersItem
          .filter((item) => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase());
          })
          .map((item, index) => {
            return <SneakerItem key={index} {...item} />;
          })}
      </div>
    </div>
  );
};

export default Sneakers;
