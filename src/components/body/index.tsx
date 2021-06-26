import '../../styles/body.scss';
import { Scrollbars } from 'react-custom-scrollbars';

interface Children {
  children: any;
}

export const Body = ({children}:Children) => {
  return (
    <div className="body">
      <Scrollbars
        style={{width: '100%', height:window.innerHeight - 150}}
        thumbSize={100}
        className="scrollbar"
        renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
      >
        {children}
      </Scrollbars>
    </div>
  );
};