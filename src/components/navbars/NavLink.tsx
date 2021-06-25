interface Props {
  value: string;
  store: any;
  handleClick: any;
}

export const NavLink = ({ value, store, handleClick }: Props) => {
  return (
    <div className="link">
      <a onClick={handleClick}>{value}</a>
    </div>
  );
}