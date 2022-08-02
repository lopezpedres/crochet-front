const gql = String.raw
import getCart from "./getCart.gql"
export  {getCart}
import cartLinesUpdate from "./cartLinesUpdate.gql"
export {cartLinesUpdate}

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