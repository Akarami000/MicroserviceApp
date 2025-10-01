import axios from "axios";

const PRODUCT_API = "http://localhost:3001/products";
const ORDER_API = "http://localhost:3002/orders";

// --- Product APIs ---
export const getProducts = async () => {
    try {
        const response = await axios.get(PRODUCT_API);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const createProduct = async (product: any) => {
    try {
        const response = await axios.post(PRODUCT_API, product);
        return response.data;
    } catch (error) {
        console.error("Error creating product:", error);
        throw error;
    }
};

// --- Order APIs ---
export const getOrders = async () => {
    try {
        const response = await axios.get(ORDER_API);
        return response.data;
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw error;
    }
};

export const createOrder = async (order: any) => {
    try {
        const response = await axios.post(ORDER_API, order);
        return response.data;
    } catch (error) {
        console.error("Error creating order:", error);
        throw error;
    }
};