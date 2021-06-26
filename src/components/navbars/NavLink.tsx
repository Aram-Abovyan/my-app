import { observer } from 'mobx-react';

interface Props {
  value: string;
  store: any;
  handleClick: any;
}

export const NavLink = observer(({ value, store, handleClick }: Props) => {
  return (
    <div className={store.filter === value.toLocaleLowerCase() ? 'active-link' : 'link'}>
      <div>
        <a onClick={handleClick}>{value}</a>
      </div>
    </div>
  );
});