import '../../styles/navbar.scss';
import { Title } from './Title';
import { Link } from './Link';

export const HorizontalNavbar = () => {
  return (
    <div className="horizontal-navbar">
      <Title value={'Courses'} />
      <Link value={'Popular'} />
      <Link value={'Favorite'} />
      <Link value={'New'} />
    </div>
  );
}