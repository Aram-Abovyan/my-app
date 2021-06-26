import { observer } from 'mobx-react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { store } from '../../../data/store';

interface Store {
  store: any;
}

interface Style {
  borderLeft: string;
}

const handleClick = (category: string) => () => {
  store.changeFilter('favorite');
  store.changeCategory(category);
};

export const DashboardIcon = observer(({ store }: Store) => {
  let style: Style = {borderLeft: ''};
  const color = store.category === 'dashboard' ? (style['borderLeft'] = '5px solid #8964D7', '#8964D7') : '#CBB1A2';

  return (
    <div
      className="icon"
      style={style}
    >
      <Link onClick={handleClick('dashboard')} to="/dashboard">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
          <path d="M44.5 0H3.5C1.57 0 0 1.57 0 3.5V8.5C0 10.43 1.57 12 3.5 12H44.5C46.43 12 48 10.43 48 8.5V3.5C48 1.57 46.43 0 44.5 0Z" fill={color}/>
          <path d="M3.5 48H18.5C20.43 48 22 46.43 22 44.5V19.5C22 17.57 20.43 16 18.5 16H3.5C1.57 16 0 17.57 0 19.5V44.5C0 46.43 1.57 48 3.5 48Z" fill={color}/>
          <path d="M44.5 16H29.5C27.57 16 26 17.57 26 19.5V26.5C26 28.43 27.57 30 29.5 30H44.5C46.43 30 48 28.43 48 26.5V19.5C48 17.57 46.43 16 44.5 16Z" fill={color}/>
          <path d="M44.5 34H29.5C27.57 34 26 35.57 26 37.5V44.5C26 46.43 27.57 48 29.5 48H44.5C46.43 48 48 46.43 48 44.5V37.5C48 35.57 46.43 34 44.5 34Z" fill={color}/>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect width="48" height="48" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </Link>
    </div>
  );
});


export const ShopingListIcon = observer(({ store }: Store) => {
  let style: Style = {borderLeft: ''};
  const color = store.category === 'shoping_list' ? (style['borderLeft'] = '5px solid #8964D7', '#8964D7') : '#CBB1A2';

  return (
    <div
      className="icon"
      style={style}
    >
      <Link onClick={handleClick('shoping_list')} to="/shoping_list">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.5 3H28.242C27.624 1.254 25.956 0 24 0C22.044 0 20.376 1.254 19.755 3H16.5C15.672 3 15 3.672 15 4.5V10.5C15 11.328 15.672 12 16.5 12H31.5C32.328 12 33 11.328 33 10.5V4.5C33 3.672 32.328 3 31.5 3Z" fill={color}/>
          <path d="M39 6H36V10.5C36 12.981 33.981 15 31.5 15H16.5C14.019 15 12 12.981 12 10.5V6H9C7.347 6 6 7.347 6 9V45C6 46.683 7.317 48 9 48H39C40.683 48 42 46.683 42 45V9C42 7.317 40.683 6 39 6ZM23.562 32.562L17.562 38.562C17.268 38.853 16.884 39 16.5 39C16.116 39 15.732 38.853 15.438 38.562L12.438 35.562C11.853 34.977 11.853 34.026 12.438 33.441C13.023 32.856 13.974 32.856 14.559 33.441L16.5 35.379L21.438 30.441C22.023 29.856 22.974 29.856 23.559 30.441C24.144 31.026 24.147 31.974 23.562 32.562ZM23.562 20.562L17.562 26.562C17.268 26.853 16.884 27 16.5 27C16.116 27 15.732 26.853 15.438 26.562L12.438 23.562C11.853 22.977 11.853 22.026 12.438 21.441C13.023 20.856 13.974 20.856 14.559 21.441L16.5 23.379L21.438 18.441C22.023 17.856 22.974 17.856 23.559 18.441C24.144 19.026 24.147 19.974 23.562 20.562ZM34.5 36H28.5C27.672 36 27 35.328 27 34.5C27 33.672 27.672 33 28.5 33H34.5C35.328 33 36 33.672 36 34.5C36 35.328 35.328 36 34.5 36ZM34.5 24H28.5C27.672 24 27 23.328 27 22.5C27 21.672 27.672 21 28.5 21H34.5C35.328 21 36 21.672 36 22.5C36 23.328 35.328 24 34.5 24Z" fill={color}/>
        </svg>
      </Link>
    </div>
  );
});

export const CustomerIcon = observer(({ store }: Store) => {
  let style: Style = {borderLeft: ''};
  const color = store.category === 'customer' ? (style['borderLeft'] = '5px solid #8964D7', '#8964D7') : '#CBB1A2';

  return (
    <div
      className="icon"
      style={style}
    >
      <Link onClick={handleClick('customer')} to="/customer">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
          <path d="M24 19.3717C28.5046 19.3717 32.1562 15.72 32.1562 11.2154C32.1562 6.71084 28.5046 3.05916 24 3.05916C19.4954 3.05916 15.8438 6.71084 15.8438 11.2154C15.8438 15.72 19.4954 19.3717 24 19.3717Z" fill={color}/>
          <path d="M40.5 19.3716C43.3477 19.3716 45.6562 17.063 45.6562 14.2153C45.6562 11.3676 43.3477 9.05907 40.5 9.05907C37.6523 9.05907 35.3438 11.3676 35.3438 14.2153C35.3438 17.063 37.6523 19.3716 40.5 19.3716Z" fill={color}/>
          <path d="M7.5 19.3716C10.3477 19.3716 12.6562 17.063 12.6562 14.2153C12.6562 11.3676 10.3477 9.05907 7.5 9.05907C4.65228 9.05907 2.34375 11.3676 2.34375 14.2153C2.34375 17.063 4.65228 19.3716 7.5 19.3716Z" fill={color}/>
          <path d="M12.5803 24.002C10.5506 22.339 8.71247 22.5592 6.36563 22.5592C2.85563 22.5592 0 25.3979 0 28.8863V39.1248C0 40.6398 1.23656 41.8717 2.75719 41.8717C9.32213 41.8717 8.53125 41.9904 8.53125 41.5885C8.53125 34.3336 7.67194 29.0132 12.5803 24.002Z" fill={color}/>
          <path d="M26.2322 22.5966C22.1331 22.2547 18.5701 22.6005 15.4969 25.1372C10.3541 29.2566 11.3438 34.8031 11.3438 41.5884C11.3438 43.3837 12.8044 44.8716 14.6269 44.8716C34.4158 44.8716 35.2034 45.5099 36.3769 42.9113C36.7617 42.0324 36.6563 42.3117 36.6563 33.9047C36.6563 27.2272 30.8744 22.5966 26.2322 22.5966Z" fill={color}/>
          <path d="M41.6344 22.5591C39.2747 22.5591 37.4466 22.3412 35.4197 24.0019C40.2914 28.9759 39.4687 33.9333 39.4687 41.5884C39.4687 41.9929 38.8122 41.8716 45.1444 41.8716C46.7194 41.8716 48 40.5956 48 39.0272V28.8863C48 25.3978 45.1444 22.5591 41.6344 22.5591Z" fill={color}/>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect width="48" height="48" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </Link>
    </div>
  );
});
