import '../../styles/navbar.scss';
import { Title } from './Title';
import { NavLink } from './NavLink';

export const HorizontalNavbar = () => {
  return (
    <div className="horizontal-navbar">
      <Title value={'Courses'} />
      <div className="links">
        <NavLink value={'Popular'} />
        <NavLink value={'Favorite'} />
        <NavLink value={'New'} />
      </div>      
    </div>
  );
}