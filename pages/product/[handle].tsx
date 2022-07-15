import React from "react";
import { GetServerSideProps } from "next";
import { storeFront } from "../utils/storeFront";

import type {
  ProductByHandle,
  SingleProduct,
} from "../types/Products/SingleProduct";
import ProductPage from "../Components/Product/ProductPage";

const gql = String.raw;
const SingleProductQuery = gql`
  query ($handle: String!) {
    productByHandle(handle: $handle) {
      title
      description
      priceRange {
        minVariantPrice {
          amount
        }
      }
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
  return <ProductPage productByHandle={productByHandle} />;
};

export default ProductItem;
