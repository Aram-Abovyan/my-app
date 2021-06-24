import '../../styles/text.scss';

interface Value {
  value: string;
}

export const Title = ({ value }:Value) => {
  return (
    <div>
      <h1 className="title">{value}</h1>
    </div>
  );
};