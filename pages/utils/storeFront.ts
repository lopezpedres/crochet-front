import fetch from "isomorphic-fetch";
export async function storeFront(
  query: string,
  //I need a generic type for the type of the data i think
  variables: any = {}
) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESSTOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });

    return response.json();
  } catch (e) {
    console.error(e);
  }
}
