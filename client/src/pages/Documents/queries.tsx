import axios from "axios";

export const getAllQuotes = async () => {
    const response = await axios.get("http://localhost:5050/getQuotes");
    return response.data;
}

export const getQuoteClient = async (id: number) => {
    const response = await axios.get(`http://localhost:5050/getQuote/${id}`);
    console.log(response.data);
    return response.data;
}