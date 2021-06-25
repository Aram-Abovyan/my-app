import { Card } from '../body/Card';
import { observer } from 'mobx-react'

interface Store {
  store: any;
}

interface Card {
  id: string;
  url: string;
}

type handleFilter = {
  [key: string]: any
}

const handleFilter: handleFilter = {
  'favorite': function(items:any[]) {
    return items.reduce((res, item) => item.rating > 2 ? [...res,item] : res, []);
  },

  'popular': function(items:any[]) {
    return items.reduce((res, item) => item.views > 20 ? [...res,item] : res, []);
  },

  'new': function(items:any[]) {
    return [...items].sort(({date:a}, {date:b}) => a - b);
  },
};

export const Dashboard = observer(({ store }: Store) => {

  const cards = handleFilter[store.filter](store.items).map(({ id, url }: Card) => (
    <Card
      key={id}
      img={url}
    />
  ))

  return (
    cards
  );
});



