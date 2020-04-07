import React from "react";
import SHOP_DATA, { ShopData } from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

interface ShopPageProps {

}

interface ShopPageState {
  collections: ShopData[]
}

class ShopPage extends React.Component<ShopPageProps, ShopPageState> {
  constructor(props: ShopPageProps) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

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