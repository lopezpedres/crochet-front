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
import type { Products } from "../types/Products/Products";

import { products } from "../graphql/queries";
const index = ({ products }: { products: Products }) => {
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
            // when window width is >= 200px
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
        </Swiper>
      </div>
    </>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data }: { data: { products: Products } } = await storeFront(products);
  console.log(data);

  return {
    props: {
      products: data.products,
    },
  };
};
