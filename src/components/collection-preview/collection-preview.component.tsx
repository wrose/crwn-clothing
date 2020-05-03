import React from "react";

import './collection-preview.styles.scss';
import { ShopItem } from "../../features/shop/data";
import CollectionItem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";

interface CollectionPreviewProps {
  title: string;
  items: ShopItem[]
}

const CollectionPreview = ({ title, items }: CollectionPreviewProps) => (
  <div className='collection-preview'>
    <Link className='option' to={`/shop/${title.toLowerCase()}`}>
      <h1 className='title'>{title}</h1>
    </Link>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item: ShopItem) => (
          <CollectionItem key={item.id} item={item}/>
        ))}
    </div>
  </div>
);

export default CollectionPreview;