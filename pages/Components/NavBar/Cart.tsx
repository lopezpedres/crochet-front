import React from "react";
import Link from "next/link";

export const Cart = () => {
  return (
    <Link href="/cart">
      <a>
        <div className="grid grid-col-1 md:hidden justify-end ">
          <img src="/cart.svg" />
        </div>
      </a>
    </Link>
  );
};
