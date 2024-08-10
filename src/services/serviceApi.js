// src/services/axios.js
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useLoading } from "../context/loadingContext";

// Set the base URL from environment variables
export const baseURL = process.env.REACT_APP_API_URL;
export const apiKey = process.env.REACT_APP_API_KEY;
export const authToken = process.env.REACT_APP_AUTH_TOKEN;

// Configuration for Axios instance
const axiosConfig = {
  baseURL,
  headers: {
    Accept: "application/json",
    "x-api-key": apiKey,
    Authorization: `Bearer ${authToken}`,
  },
};

// Create Axios instance with the given configuration
const axiosClient = axios.create(axiosConfig);

// Function to setup interceptors
const setupInterceptors = (setLoading) => {
  axiosClient.interceptors.request.use((config) => {
    setLoading(true);
    return config;
  });

  axiosClient.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    (error) => {
      setLoading(false);
      if (!error.response) {
        toast.error("Network error: Please check your internet connection.");
      } else if (error.response.status === 401) {
        toast.error("Unauthorized: Invalid API key or token.");
      } else {
        toast.error(error.response?.data?.message || "An error occurred.");
      }
      return Promise.reject(error);
    }
  );
};

// ServiceApi class to handle API requests
class ServiceApi {
  constructor() {
    this.url = baseURL;
  }

  // Method to append endpoint to base URL
  appendToURL(url) {
    return `${this.url}${url}`;
  }

  // Method to setup headers for requests
  setupHeaders() {
    return {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${Cookies.get("api_token")}`,
        Authorization: `Bearer ${authToken}`,
      },
    };
  }

  // Method to handle GET requests
  async fetch(url, data) {
    try {
      const response = await axiosClient.get(this.appendToURL(url), {
        params: data,
        headers: this.setupHeaders().headers,
      });
      return response;
    } catch (err) {
      return err;
    }
  }

  // Method to handle POST requests
  async post(url, data) {
    try {
      const response = await axiosClient.post(
        this.appendToURL(url),
        data,
        this.setupHeaders()
      );
      return response;
    } catch (err) {
      console.error("Error in POST request:", err);
      return err;
    }
  }

  // Method to handle DELETE requests
  async delete(url) {
    try {
      const response = await axiosClient.delete(
        this.appendToURL(url),
        this.setupHeaders()
      );
      return response;
    } catch (err) {
      return err;
    }
  }

  // Method to handle PATCH requests
  async update(url, data) {
    try {
      const response = await axiosClient.patch(
        this.appendToURL(url),
        data,
        this.setupHeaders()
      );
      return response;
    } catch (err) {
      return err;
    }
  }

  // Method to check if the response is successful
  isSuccessful(response) {
    const codes = [200, 201, 202, 204];
    const statusCode =
      response?.status || response?.statusCode || response?.code;
    const message =
      response?.data?.message || response?.response?.data?.message;

    if (!codes.includes(statusCode)) {
      if (Array.isArray(message) && message.length > 0) {
        toast.error(message[0]);
      } else {
        toast.error(message);
      }
    }
    return codes.includes(statusCode);
  }
}

// Hook to setup the interceptors
export const useAxiosInterceptors = () => {
  const { setLoading } = useLoading();
  setupInterceptors(setLoading);
};

// Export an instance of ServiceApi
export default new ServiceApi();
