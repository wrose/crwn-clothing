import { StoreState } from "../../store";
import { createSelector } from "reselect";

const selectShop = (state: StoreState) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
  )