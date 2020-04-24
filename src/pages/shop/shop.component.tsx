import React from "react";
import SHOP_DATA, { ShopData } from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

interface ShopPageState {
  collections: ShopData[]
}

class ShopPage extends React.Component<any, ShopPageState> {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (<div>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>);
  }
}

export default ShopPage;