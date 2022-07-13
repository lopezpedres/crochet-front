import React from "react";
import { GetServerSideProps } from "next";
import { storeFront } from "../utils/storeFront";

import type {
  ProductByHandle,
  SingleProduct,
} from "../types/Products/SingleProduct";
import ProductPage from "../Components/Product/ProductPage";
//Server side rendering

const gql = String.raw;
const SingleProductQuery = gql`
  query ($handle: String!) {
    productByHandle(handle: $handle) {
      title
      description
      images(first: 3) {
        edges {
          node {
            url
            altText
          }
        }
      }
    }
  }
`;
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log("params", params.handle);

  const { data }: SingleProduct = await storeFront(SingleProductQuery, {
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
  return (
    <div>
      <ProductPage productByHandle={productByHandle}/>
    </div>
  );
};

export default ProductItem;
