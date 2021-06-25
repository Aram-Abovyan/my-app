import '../../styles/navbar.scss';
import { Title } from './Title';
import { NavLink } from './NavLink';
import { store } from '../../data/store';

export const HorizontalNavbar = () => {
  const handleClick = (filter: string) => () => {
    store.changeFilter(filter);
  }
  return (
    <div className="horizontal-navbar">
      <Title value={'Courses'} />
      <div className="links">
        <NavLink
          store={store}
          handleClick={handleClick('popular')}
          value={'Popular'}
        />
        <NavLink
          store={store}
          handleClick={handleClick('favorite')}
          value={'Favorite'}
        />
        <NavLink
          store={store}
          handleClick={handleClick('new')}
          value={'New'}
        />
      </div>      
    </div>
  );
}