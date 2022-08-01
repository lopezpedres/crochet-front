const gql = String.raw
import getCart from "./queries/getCart.gql"
export  {getCart}

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