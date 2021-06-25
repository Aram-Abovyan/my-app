interface Value {
  value: string;
}

export const NavLink = ({ value }: Value) => {
  return (
    <div className="link">
      <a>{value}</a>
    </div>
  );
}