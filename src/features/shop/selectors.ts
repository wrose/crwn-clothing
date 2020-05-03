import { StoreState } from "../../store";
import { createSelector } from "reselect";

const selectShop = (state: StoreState) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
  )