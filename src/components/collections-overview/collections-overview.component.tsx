import React from 'react';

import './collections-overview.styles.scss';
import { createStructuredSelector } from "reselect";
import { StoreState } from "../../store";
import { selectShopCollections } from "../../features/shop/selectors";
import { connect } from "react-redux";
import { ShopData } from "../../features/shop/data";

interface CollectionsOverviewProps {
  collections: Record<string, ShopData>;
}

interface BigObject<T> {
  [index: string]: T;
}

const CollectionsOverview = ({ collections }: CollectionsOverviewProps) => {
  return (
    <div className='collections-overview'>
      {

      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector<StoreState, CollectionsOverviewProps>({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);