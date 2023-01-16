import React from "react";
import Link from "next/link";
import Image from "next/image";
const Cart = () => {
  return (
    <Link href="/cart">
      <a>
        <div className="grid grid-col-1 md:hidden justify-end ">
          <Image width={28} height={28} alt={"Shopping Cart"} src="/cart.svg" />
        </div>
      </a>
    </Link>
  );
};
export default Cart;
