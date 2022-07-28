const gql = String.raw
export const getCart = gql`
query getCart {
    cart(id: "gid://shopify/Cart/d0e5a930f77cfc01bb0ec138b9b5dfeb") {
      id
      lines(first:1){
        edges{
           node{
            quantity
            merchandise {
              ... on ProductVariant {
                product{
                  handle
                  title
                  priceRange{
                    maxVariantPrice{
                      amount
                    }
                  }
                }
              }
            }
          }
        }
      }
      attributes{
        key
        value
      }
      createdAt
    }
  }

`
//Need to add the variables 
const createCart = gql`
mutation CreateCart($input: CartInput) {
    cartCreate(input: $input) {
      cart {
        id
      }
      userErrors {
        message
      }
    }
  }
`