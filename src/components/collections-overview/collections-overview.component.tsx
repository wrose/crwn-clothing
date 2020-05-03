import React from 'react';

import './collections-overview.styles.scss';
import { createStructuredSelector } from "reselect";
import { StoreState } from "../../store";
import { selectCollectionsForPreview } from "../../features/shop/selectors";
import { connect } from "react-redux";
import { ShopData } from "../../features/shop/data";
import CollectionPreview from "../collection-preview/collection-preview.component";

interface CollectionsOverviewProps {
  collections: ShopData[]
}

const CollectionsOverview = ({ collections }: CollectionsOverviewProps) => {
  return (
    <div className='collections-overview'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector<StoreState, CollectionsOverviewProps>({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);