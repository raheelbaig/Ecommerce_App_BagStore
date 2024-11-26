import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductsByName = async (searchParams: string) => {

  console.log("searchParams", searchParams)
  const PRODUCT_SEARCH_QUERY = defineQuery(`
        *[
            _type == "productType"
            && name match $searchParams
        ] | order(nama asc)
    `);

  try {
    const product = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: {
        searchParams: `${searchParams}*`,
      },
    })
    return product.data || [];
  } catch (error) {
    console.error("Error fetching product by name", error);
    return null;
  }
};
