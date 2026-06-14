import { axiosClient } from "../../../services/axiosClient";

export async function getProducts() {
    const productsResponse = await axiosClient.get("/products");
    return productsResponse.data;
}