import React from "react";

import './collection-item.styles.scss';

interface CollectionItemProps {
  name: string;
  price: number;
  imageUrl: string;
}

const CollectionItem = ({ name, price, imageUrl }: CollectionItemProps) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>${price}</span>
    </div>
  </div>
);

export default CollectionItem;