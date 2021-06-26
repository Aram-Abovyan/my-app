import '../../styles/navbar.scss';
import '../../styles/icon.scss';
import { DashboardIcon, ShopingListIcon, CustomerIcon } from '../../../src/components/navbars/icons/';
import { store } from '../../data/store';

export const VerticalNavbar = () => {
  return (
    <div className="vertical-navbar">
      <DashboardIcon
        store={store}
      />
      <ShopingListIcon
        store={store}
      />
      <CustomerIcon
        store={store}
      />
    </div>
  );
}