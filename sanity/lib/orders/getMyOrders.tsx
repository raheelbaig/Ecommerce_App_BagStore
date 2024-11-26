import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function getMyOrders(userId: string) {
  if (!userId) {
    throw new Error("User Id is required!");
  }

  const MY_ORDER_QUERY = defineQuery(`
        *[_type == "order" && clerkUserId == $userId] | order(orderDate desc) {
            ...,
            products[] {
                ...,
                product->
            }
        }
    `);

  try {
    const order = await sanityFetch({
      query: MY_ORDER_QUERY,
      params: { userId },
    });
    return order.data || [];
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Error fetching orders");
  }
}
