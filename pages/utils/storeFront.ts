import fetch from "isomorphic-fetch"
export async function storeFront(query:string, variables:{[key:string]:string|string[]}={}) {
    try{
        const response = await  fetch(
            process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "X-Shopify-Storefront-Access-Token":process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESSTOKEN
                },
                body:JSON.stringify({query,variables})
                
            }
        )
        console.log(response)
        
        return response.json()
    }
    catch(e){
        console.log(e)

    }
    
}