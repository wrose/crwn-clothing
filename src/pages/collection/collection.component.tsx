import React from 'react';

import './collection.styles.scss';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import { selectCollection } from "../../features/shop/selectors";
import { StoreState } from "../../store";
import { ShopData } from "../../features/shop/data";
import CollectionItem from "../../components/collection-item/collection-item.component";

type TParams = { collectionId: string; }

interface OwnProps {
  collection?: ShopData;
}

interface CollectionPageProps extends OwnProps, RouteComponentProps<TParams> {
}

const CollectionPage = ({match, collection}: CollectionPageProps) => {
  if (!collection) {
    throw Error("Collection not defined on CollectionPage component.")
  }
  const { title, items } = collection;
  console.log(match.params.collectionId);
  return (
    <div className='collection-page'>
      <h2>{title}</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item}/>)
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state: StoreState, ownProps: CollectionPageProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);