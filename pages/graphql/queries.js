const gql = String.raw
import getCart from "./getCart.gql"
export  {getCart}
import cartLinesUpdate from "./cartLinesUpdate.gql"
export {cartLinesUpdate}
import  productByHandle  from "./productByHandle.gql"
export {productByHandle}

//Need to add the variables 
// const createCart = gql`
// mutation CreateCart($input: CartInput) {
//     cartCreate(input: $input) {
//       cart {
//         id
//       }
//       userErrors {
//         message
//       }
//     }
//   }
// `