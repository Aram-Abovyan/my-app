import '../../styles/navbar.scss';
import '../../styles/icon.scss';
import { DashboardIcon, ShopingListIcon, CustomerIcon } from '../../../src/components/navbars/icons/';

export const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
      <DashboardIcon />
      <ShopingListIcon />
      <CustomerIcon />
    </div>
  );
}