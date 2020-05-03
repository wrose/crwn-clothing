import React from "react";

import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { ShopItem } from "../../features/shop/data";
import { addItem } from "../../features/cart/actions";

interface CollectionItemProps {
  item: ShopItem;
  addItem: any;
}

const CollectionItem = ({ item, addItem }: CollectionItemProps) => {
  const { name, price, imageUrl } = item;
  return(
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
      <CustomButton onClick={() => addItem(item)} inverted> Add to cart </CustomButton>
    </div>
  );
};

const mapDispatchToProps = {
  addItem: addItem
}

export default connect(null, mapDispatchToProps)(CollectionItem);