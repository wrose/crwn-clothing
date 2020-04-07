import React from "react";

import './collection-preview.styles.scss';
import { ShopItem } from "../../pages/shop/shop.data";
import CollectionItem from "../collection-item/collection-item.component";

interface CollectionPreviewProps {
  title: string;
  items: ShopItem[]
}

const CollectionPreview = ({ title, items }: CollectionPreviewProps) => (
  <div className='collection-preview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...props}) => (
          <CollectionItem key={id} {...props} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;