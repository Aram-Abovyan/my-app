import '../../styles/body.scss';
import { Scrollbars } from 'react-custom-scrollbars';
import { Card } from './Card';
import { imagesData } from '../../data/images';

export const Body = () => {
  const cards:any[] = imagesData.map(({ id, url }) => (
    <Card
      key={id}
      img={url}
    />
  ))

  return (
    <div className="body">
      <Scrollbars
        style={{width: '100%', height:window.innerHeight - 150}}
        thumbSize={100}
        className="scrollbar"
      >
        {cards}
      </Scrollbars>
    </div>
  );
};