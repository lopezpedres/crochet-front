import React from "react";
import { GetServerSideProps } from "next";
import { storeFront } from "../utils/storeFront";
import { productByHandle } from "../graphql/queries";

import type {
  ProductByHandle,
  SingleProduct,
} from "../types/Products/SingleProduct";
import ProductPage from "../Components/Product/ProductPage";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data }: SingleProduct = await storeFront(productByHandle, {
    handle: params.handle,
  });
  return {
    props: {
      productByHandle: data.productByHandle,
    },
  };
};

const ProductItem = ({
  productByHandle,
}: {
  productByHandle: ProductByHandle;
}) => {
  return <ProductPage productByHandle={productByHandle} />;
};

export default ProductItem;
