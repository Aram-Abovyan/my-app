interface Value {
  value: string;
}

export const Link = ({ value }: Value) => {
  return (
    <div className="link">
      <a>{value}</a>
    </div>
  );
}