import React from "react";
import { GetServerSideProps } from "next";
import ProductItem from "../Components/Product/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper";
import { GridOptions } from "swiper/types";

import { storeFront } from "../utils/storeFront";

//allProduct types

export interface allProducts {
  products: Products;
}

export interface Products {
  edges?: (EdgesEntity)[] | null;
}
export interface EdgesEntity {
  node: Node;
}
export interface Node {
  title: string;
  priceRange: PriceRange;
  images: Images;
}
export interface PriceRange {
  minVariantPrice: MinVariantPrice;
}
export interface MinVariantPrice {
  amount: string;
}
export interface Images {
  edges?: (EdgesEntity1)[] | null;
}
export interface EdgesEntity1 {
  node: Node1;
}
export interface Node1 {
  url: string;
  altText?: null;
}
export interface Extensions {
  cost: Cost;
}
export interface Cost {
  requestedQueryCost: number;
  actualQueryCost: number;
  throttleStatus: ThrottleStatus;
}
export interface ThrottleStatus {
  maximumAvailable: number;
  currentlyAvailable: number;
  restoreRate: number;
}





const index = ({products}:{products:Products}) => {
  console.log(products);
  const myGrid: GridOptions = {
    rows: 10,
    fill: "row",
  };
  
  return (
    <>
      <div className="text-center text-4xl mb-4">Catálogo</div>
      <div className="container  mb-10 mx-auto ">
        <Swiper
          breakpoints={{
            // when window width is >= 576px
            200: {
              slidesPerView: 2,
              spaceBetween: 16,
              grid: myGrid,
            },
            // when window width is >= 960px
            960: {
              slidesPerView: 3,
              spaceBetween: 20,
              grid: myGrid,
            },
            // when window width is >= 1440px
            1440: {
              slidesPerView: 3,
              spaceBetween: 20,
              grid: myGrid,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Grid, Pagination]}
        >
          {products.edges.map((product) => (
            <SwiperSlide key={product.node.title}>
              <ProductItem product={product.node} />
            </SwiperSlide> 
          ))}
          {/* <div>
            <SwiperSlide>
              <ProductItem product={product} />
            </SwiperSlide>
          </div> */}
        </Swiper>
      </div>
    </>
  );
};

export default index;

const gql = String.raw;

const query = gql`
  query Products {
    products(first: 30) {
      edges {
        node {
          title
          priceRange{
            minVariantPrice{
              amount
            }
          }
          images(first:1){
            edges{
              node{
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const  {data} : { data: allProducts } = await storeFront(query);
  console.log(data);
  
  return {
    props: {
      products: data.products,
    },
  };
};
