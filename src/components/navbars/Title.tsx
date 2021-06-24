import '../../styles/text.scss';

interface Value {
  value: string;
}

export const Title = ({ value }:Value) => {
  return (
    <div className="title-wrap">
      <h1 className="title">{value}</h1>
    </div>
  );
};